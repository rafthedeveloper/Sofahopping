# == Schema Information
#
# Table name: friendships
#
#  id             :integer          not null, primary key
#  requester_id   :integer          not null
#  requestee_id   :integer          not null
#  pending_status :string           not null
#

class Friendship < ActiveRecord::Base
  validates :friend_requester, :friend_requestee, :pending_status, presence: true
  validate :not_already_friends

  after_initialize :ensure_pending_status

  belongs_to :friend_requester,
    class_name: "User",
    foreign_key: :requester_id,
    primary_key: :id,
    inverse_of: :requested_friendships

  belongs_to :friend_requestee,
    class_name: "User",
    foreign_key: :requestee_id,
    primary_key: :id,
    inverse_of: :requested_by_others


  def self.find_friendship(id1, id2)
    friends = Friendship.where("requester_id = ? AND requestee_id = ?", id1, id2)
    return nil if friends == []
    return friends
  end

  def not_already_friends
    if Friendship.find_friendship(self.requestee_id, self.requester_id)
      errors.add(:requester_id, "is already friends with that person.")
    elsif(self.requestee_id == self.requester_id)
      errors.add(:requester_id, "cannot be friends with yourself.")
    end
  end

  def ensure_pending_status
    self.pending_status ||= "pending"
  end
end
