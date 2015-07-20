# == Schema Information
#
# Table name: requests
#
#  id             :integer          not null, primary key
#  requester_id   :integer          not null
#  requestee_id   :integer          not null
#  location       :string           not null
#  message        :string           not null
#  arrival_date   :date             not null
#  departure_date :date             not null
#  num_guests     :integer          not null
#

class Request < ActiveRecord::Base
  validates :requester_id, :requestee_id, :location, :message, :arrival_date,
  :departure_date, :num_guests
end
