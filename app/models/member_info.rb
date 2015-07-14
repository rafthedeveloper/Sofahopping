# == Schema Information
#
# Table name: member_infos
#
#  id             :integer          not null, primary key
#  fname          :string           not null
#  lname          :string           not null
#  gender         :string           not null
#  birthday       :date             not null
#  location       :string           not null
#  hosting_status :string           not null
#  user_id        :integer          not null
#  created_at     :datetime
#  updated_at     :datetime
#

class MemberInfo < ActiveRecord::Base
  validates :fname, :lname, :gender, :birthday, :location, :hosting_status, :user_id, presence: true

  after_initiliaze :generate_hosting_status

  belongs_to :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id

  private
  def generate_hosting_status
    self.hosting_status = "Maybe Accepting Guests";
  end
end
