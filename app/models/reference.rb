# == Schema Information
#
# Table name: references
#
#  id           :integer          not null, primary key
#  referencer   :integer          not null
#  referencee   :integer          not null
#  relationship :string           not null
#  experience   :string           not null
#  description  :text             not null
#  created_at   :datetime
#  updated_at   :datetime
#

class Reference < ActiveRecord::Base
  validates :referencer, :referencee, :relationship, :experience,
            :description, presence: true
end
