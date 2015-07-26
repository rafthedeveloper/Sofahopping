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
#  requester_type :string
#  status         :string           not null
#  updated_at     :datetime
#  created_at     :datetime
#

class Request < ActiveRecord::Base
  validates :requester_id, :requestee_id, :location, :message, :arrival_date,
  :departure_date, :num_guests, :requester_type, :status, presence: true

  after_initialize :ensure_status

  belongs_to :requester,
  class_name: "User",
  foreign_key: :requester_id,
  primary_key: :id

  belongs_to :requestee,
  class_name: "User",
  foreign_key: :requestee_id,
  primary_key: :id

  has_many :messages,
   class_name: "Message",
   foreign_key: :request_id,
   primary_key: :id

  def ensure_status
    self.status ||= "pending"
  end

end
