json.extract! @user, :fname, :lname, :location, :hosting_status, :gender, :birthday, :created_at, :username, :id
json.trips @user.trips, :to, :description, :arrival_date, :departure_date, :num_guests, :id
json.pending_friends @user.pending_requested_friends
json.received_requests @user.received_requests
json.avatar_url asset_path(@user.avatar.url(:original))
