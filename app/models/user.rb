# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  fname               :string           not null
#  lname               :string           not null
#  gender              :string           not null
#  birthday            :date             not null
#  location            :string           not null
#  hosting_status      :string           not null
#  created_at          :datetime
#  updated_at          :datetime
#  provider            :string
#  uid                 :string
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ActiveRecord::Base
  include PgSearch
  pg_search_scope :search_by_location,
                  :against => [:location, :fname, :lname],
                  :using => {
                   :tsearch => {:prefix => true},
                   :trigram => {
                     :threshold => 0.1
                   }
                 }


  has_attached_file :avatar, default_url: "default.png",
    :styles => {
      :thumb => "75x75",
      :original => "250x250"
    },
    :convert_options => {
        :thumb => "-quality 75 -strip"
    }

  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  validates :username, :password_digest, :session_token, :fname,
            :lname, :gender, :birthday, :location, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password



  after_initialize :ensure_session_token, :generate_hosting_status

  has_many :trips,
    class_name: "Trip",
    foreign_key: :user_id,
    primary_key: :id,
    inverse_of: :traveler,
    dependent: :destroy

  has_many :written_references,
    class_name: "Reference",
    foreign_key: :referencer_id,
    primary_key: :id,
    dependent: :destroy

  has_many :received_references,
    class_name: "Reference",
    foreign_key: :referencee_id,
    primary_key: :id,
    inverse_of: :referencee,
    dependent: :destroy

  has_many :requested_friendships,
    class_name: "Friendship",
    foreign_key: :requester_id,
    primary_key: :id,
    inverse_of: :friend_requester,
    dependent: :destroy

  has_many :friend_requests_received,
    class_name: "Friendship",
    foreign_key: :requestee_id,
    primary_key: :id,
    inverse_of: :friend_requestee,
    dependent: :destroy

  has_many :created_requests,
    class_name: "Request",
    foreign_key: :requester_id,
    primary_key: :id,
    dependent: :destroy

  has_many :received_requests,
    class_name: "Request",
    foreign_key: :requestee_id,
    primary_key: :id,
    dependent: :destroy

  has_many :written_messages,
     class_name: "Message",
     foreign_key: :author_id,
     primary_key: :id,
     dependent: :destroy




  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def num_trips
    return trips.length
  end

  def self.create_guest_account
    user = User.create!(
        username: "guest" + SecureRandom.urlsafe_base64(16),
        password: SecureRandom.urlsafe_base64(16),
        fname: Faker::Name.first_name,
        lname: Faker::Name.last_name,
        location: Faker::Address.city,
        birthday: "29/10/1969",
        gender: "other",
        is_guest: true
    )
    user.generate_guest_seed_data
    user
  end

  def self.find_or_create_by_auth_hash(auth_hash)
    user = User.find_by(
            provider: auth_hash[:provider],
            uid: auth_hash[:uid])

    unless user
      user = User.create!(
        provider: auth_hash[:provider],
        uid: auth_hash[:uid],
        fname: auth_hash[:info][:first_name],
        lname: auth_hash[:info][:last_name],
        username: auth_hash[:info][:email],
        password: SecureRandom::urlsafe_base64,
        location: "No location set",
        birthday: "29/10/1969",
        gender: "other"
      )
    end

    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end


  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def self.find_hosts(query, page_num)
    if query == "none"
      users = User.includes(:received_references)
                   .where(hosting_status: "yes")
                   .page(page_num).per(20)
    else
      users = User.includes(:received_references)
                   .where(hosting_status: "yes")
                   .search_by_location(query)
                   .page(page_num).per(20)

    end

    users
  end

  def self.find_all(query, page_num)
    if query == "none"
      users = User.includes(:received_references).all
                   .page(page_num).per(20)
    else
      users = User.includes(:received_references)
                   .search_by_location(query)
                   .page(page_num).per(20)
    end

    users
  end

  def generate_guest_seed_data
    users = User.all

    t1 = Trip.create!(
         user_id: self.id,
         from: self.location,
         to: "Iceland",
         description: "Hey, I'm looking for a place to stay for a few days while I'm traveling! Hopefully someone on here can accomodate me.",
         arrival_date: "15/09/2016",
         departure_date: "25/09/2016",
         num_guests: 1
    )

    t2 = Trip.create!(
         user_id: self.id,
         from: self.location,
         to: "London",
         description: "Hey, I'm looking for a place to stay for a few days while I'm traveling! Hopefully someone on here can accomodate me.",
         arrival_date: "23/10/2016",
         departure_date: "28/10/2016",
         num_guests: 1
    )

    i = 0
    while (i < 5)
      Friendship.create!(
         friend_requestee: self,
         friend_requester: users[i],
         pending_status: "pending"
        ) unless self == users[i]
        i += 1

     r = Request.create!(
        requester_id: users[i].id,
        requestee_id: self.id,
        location: self.location,
        message: "Hey I'd appreciate it if you would host me when I visit #{self.location} thanks!",
        arrival_date: "10/09/2015",
        departure_date: "15/09/2015",
        num_guests: 1,
        requester_type: "guest"
      ) unless self.id == users[i].id

      Message.create!(
        request_id: r.id,
        author_id: self.id,
        content: "I'll have to see what I'm doing during that time, give me a few days to get back to you!"
      )
    end

    i = 6
    while (i < 9)
      Friendship.create!(
         friend_requestee: self,
         friend_requester: users[i],
         pending_status: "accepted"
        ) unless self == users[i]
        i += 1

      Reference.create!(
           referencer_id: users[i].id,
           referencee_id: self.id,
           relationship: "guest",
           description: "What an amazing host! Had a great time at #{self.location}. Glad we made this connection, hopefully I can return the favor in the future.",
           experience: "positive"
      ) unless self.id == users[i].id
    end





  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def generate_hosting_status
    self.hosting_status ||= "maybe"
  end


end
