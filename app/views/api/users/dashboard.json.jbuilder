json.extract! @user, :fname, :lname, :location, :hosting_status, :gender, :birthday, :created_at, :username, :id
json.trips @user.trips, :location, :description, :arrival_date, :departure_date, :num_guests, :id
json.pending_friends do
  json.array! @user.pending_friends do |pending_friend|
    json.extract! pending_friend, :id, :requester_id, :requestee_id, :pending_status, :friend_details
  end
end
