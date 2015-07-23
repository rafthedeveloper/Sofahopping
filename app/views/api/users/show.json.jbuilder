json.extract! current_user, :fname, :lname, :location, :hosting_status, :gender, :birthday, :created_at, :username, :id
json.trips current_userr.trips, :to, :description, :arrival_date, :departure_date, :num_guests, :id
json.references current_user.received_references, :id, :relationship, :experience, :description, :referencer_id
json.friends current_user.accepted_friends
json.pending_friends current_user.pending_friends
json.avatar_url asset_path(current_user.avatar.url(:original))
