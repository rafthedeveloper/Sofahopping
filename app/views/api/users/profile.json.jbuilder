json.extract! @user, :id, :fname, :lname, :location, :hosting_status, :updated_at, :gender, :created_at, :birthday
json.references @user.received_references, :id, :relationship, :experience, :created_at, :description, :referencer_id, :author_details
json.avatar_url asset_path(@user.avatar.url(:original))

json.friends (@user.friend_requests_received + @user.requested_friendships) do |friendship|
  if friendship.pending_status == "accepted" && friendship.requester_id != @user.id
    json.id friendship.id
    json.friend_id friendship.friend_requester.id
    json.fname friendship.friend_requester.fname
    json.lname friendship.friend_requester.lname
    json.avatar_url ActionController::Base.helpers.asset_path(friendship.friend_requester.avatar.url(:thumb))
    json.location friendship.friend_requester.location
  elsif friendship.pending_status == "accepted" && friendship.requester_id == @user.id
    json.id friendship.id
    json.friend_id friendship.friend_requestee.id
    json.fname friendship.friend_requestee.fname
    json.lname friendship.friend_requestee.lname
    json.avatar_url ActionController::Base.helpers.asset_path(friendship.friend_requestee.avatar.url(:thumb))
    json.location friendship.friend_requestee.location
  end
end
