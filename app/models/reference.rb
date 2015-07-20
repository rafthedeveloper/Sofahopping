# == Schema Information
#
# Table name: references
#
#  id            :integer          not null, primary key
#  referencer_id :integer          not null
#  referencee_id :integer          not null
#  relationship  :string           not null
#  experience    :string           not null
#  description   :text             not null
#  created_at    :datetime
#  updated_at    :datetime
#

class Reference < ActiveRecord::Base
  validates :referencee, :referencee_id, :relationship, :experience,
            :description, presence: true

  belongs_to :referencee,
    class_name: "User",
    foreign_key: :referencee_id,
    primary_key: :id,
    inverse_of: :received_references

  belongs_to :author,
    class_name: "User",
    foreign_key: :referencer_id,
    primary_key: :id

  def author_details

      details = {}
      author = self.author
      details["fname"] = author.fname
      details["lname"] = author.lname
      details["id"] = author.id
      details["location"] = author.location
      
      details
    end



end
