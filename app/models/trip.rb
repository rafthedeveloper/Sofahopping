# == Schema Information
#
# Table name: trips
#
#  id             :integer          not null, primary key
#  user_id        :integer          not null
#  description    :text             not null
#  from           :string
#  to             :string
#  arrival_date   :date
#  departure_date :date
#  num_guests     :integer
#

class Trip < ActiveRecord::Base
  include PgSearch
  pg_search_scope :search_by_location,
                  :against => [:to],
                  :using => {
                   :tsearch => {:prefix => true},
                   :trigram => {
                     :threshold => 0.2
                   }
                 }

  validates :traveler, :description, :arrival_date, :departure_date, :num_guests,
            :from, :to, presence: true

  belongs_to :traveler,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id,
    inverse_of: :trips

  def self.find_travelers(query, page_num, current_user_id)
    if query == "none"
      trips = Trip.includes(:traveler).where("user_id != ?", current_user_id)
                                      .page(page_num).per(20)
    else
      trips = Trip.includes(:traveler).where("user_id != ?", current_user_id)
                                      .search_by_location(query)
                                      .page(page_num).per(20)
    end

    trips
  end
end
