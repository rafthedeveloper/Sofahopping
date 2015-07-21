# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  gender          :string           not null
#  birthday        :date             not null
#  location        :string           not null
#  hosting_status  :string           not null
#  created_at      :datetime
#  updated_at      :datetime
#  provider        :string
#  uid             :string
#

class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, :fname,
            :lname, :gender, :birthday, :location, presence: true
  validates :password, length: { minimum: 1, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token, :generate_hosting_status

  has_many :trips,
    class_name: "Trip",
    foreign_key: :user_id,
    primary_key: :id,
    inverse_of: :traveler

  has_many :written_references,
    class_name: "Reference",
    foreign_key: :referencer_id,
    primary_key: :id

  has_many :received_references,
    class_name: "Reference",
    foreign_key: :referencee_id,
    primary_key: :id,
    inverse_of: :referencee

  has_many :requested_friendships,
    class_name: "Friendship",
    foreign_key: :requester_id,
    primary_key: :id,
    inverse_of: :friend_requester

  has_many :requested_by_others,
    class_name: "Friendship",
    foreign_key: :requestee_id,
    primary_key: :id,
    inverse_of: :friend_requestee

  has_many :created_requests,
    class_name: "Request",
    foreign_key: :requester_id,
    primary_key: :id

  has_many :received_requests,
    class_name: "Request",
    foreign_key: :requestee_id,
    primary_key: :id



  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def num_trips
    return trips.length
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

  def num_refs
    self.received_references.length
  end

  def accepted_friends
    all_friends = []
    all_friends_details = []
    requested_friends = self.requested_friendships.where("pending_status = ?", "accepted")
    requested_by_others = self.requested_by_others.where("pending_status = ?", "accepted")

    all_friends.concat(requested_friends).concat(requested_by_others)
    all_friends.each do |friend|
      if (friend.friend_requester.id == self.id)
        added_friend = friend.friend_requestee
      else
        added_friend = friend.friend_requester
      end

      details = {}
      details["requester_id"] = friend.requester_id
      details["requestee_id"] = friend.requestee_id
      details["id"] = friend.id
      details["fname"] = added_friend.fname
      details["lname"] = added_friend.lname

      details["location"] = added_friend.location
      all_friends_details.push(details);
    end

    all_friends_details
  end

  def pending_friends
    pending_friends = []
    pending_friends_details = [];
    requested_friends = self.requested_friendships.where("pending_status = ?" , "pending")
    requested_by_others = self.requested_by_others.where("pending_status = ?", "pending")

    pending_friends.concat(requested_friends).concat(requested_by_others)

    pending_friends.each do |friend|
      if (friend.friend_requester.id == self.id)
        pending_friend = friend.friend_requestee
      else
        pending_friend = friend.friend_requester
      end

      details = {}
      details["requester_id"] = friend.requester_id
      details["requestee_id"] = friend.requestee_id
      details["id"] = friend.id
      details["fname"] = pending_friend.fname
      details["lname"] = pending_friend.lname

      details["location"] = pending_friend.location

      pending_friends_details.push(details);
    end

    pending_friends_details

  end

  def pending_requested_friends
    pending_friends = []
    pending_friends_details = [];
    requested_by_others = self.requested_by_others.where("pending_status = ?", "pending")

    pending_friends.concat(requested_by_others)

    pending_friends.each do |friend|
      if (friend.friend_requester.id == self.id)
        pending_friend = friend.friend_requestee
      else
        pending_friend = friend.friend_requester
      end

      details = {}
      details["requester_id"] = friend.requester_id
      details["requestee_id"] = friend.requestee_id
      details["id"] = friend.id
      details["fname"] = pending_friend.fname
      details["lname"] = pending_friend.lname

      details["location"] = pending_friend.location

      pending_friends_details.push(details);
    end

    pending_friends_details


  end

  def remove_friend
    all_friends = self.friends
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def generate_hosting_status
    self.hosting_status ||= "maybe"
  end
end
