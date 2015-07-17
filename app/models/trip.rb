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
  validates :traveler, :location, :description, :arrival_date, :departure_date, :num_guests, presence: true

  belongs_to :traveler,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id,
    inverse_of: :trips

  def self.find_all_travelers
    travelers = [];
    Trip.all.each do |trip|
      trav = trip.traveler;
      traveler_details = { fname: trav.fname, lname: trav.lname, from: trav.location }
      trip_details = { description: trip.description, to: trip.location,
                       arrival_date: trip.arrival_date, departure_date: trip.departure_date,
                       num_guests: trip.num_guests, user_id: trav.id }
      travelers.push(traveler_details.merge(trip_details));
    end

    travelers
  end


end
