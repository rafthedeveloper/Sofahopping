# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  request_id :integer          not null
#  content    :text             not null
#  created_at :datetime
#  updated_at :datetime
#

class Message < ActiveRecord::Base
  validates :author_id, :request_id, :content, presence: true

  belongs_to :author,
   class_name: "User",
   foreign_key: :author_id,
   primary_key: :id

  belongs_to :request,
   class_name: "Request",
   foreign_key: :request_id,
   primary_key: :id
end
