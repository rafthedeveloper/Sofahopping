json.extract! @user, :id, :fname, :lname, :location, :hosting_status
json.avatar_url asset_path(@user.avatar.url(:original))
json.trips @user.trips, :to, :description, :arrival_date, :departure_date, :num_guests, :id

json.pending_friends @user.friend_requests_received do |friendship|
  if friendship.pending_status == "pending" && friendship.requester_id != @user.id
    json.id friendship.id
    json.friend_id friendship.friend_requester.id
    json.fname friendship.friend_requester.fname
    json.lname friendship.friend_requester.lname
    json.location friendship.friend_requester.location
    json.avatar_url asset_path(friendship.friend_requester.avatar.url(:thumb))
  end
end
