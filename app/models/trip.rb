# == Schema Information
#
# Table name: trips
#
#  id             :integer          not null, primary key
#  user_id        :integer          not null
#  location       :string           not null
#  description    :text             not null
#  arrival_date   :date             not null
#  departure_date :date             not null
#  num_guests     :integer          not null
#

class Trip < ActiveRecord::Base
  validates :user_id, :location, :description, :arrival_date, :departure_date, :num_guests,
            presence: true

  belongs_to :traveler,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id

  def self.find_all_travelers
    travelers = [];
    Trip.all.each { |trip| travelers.push(trip.traveler) }

    travelers.uniq;
  end
end
