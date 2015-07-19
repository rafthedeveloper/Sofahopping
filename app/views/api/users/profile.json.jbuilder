json.extract! @user, :fname, :lname, :location, :hosting_status, :gender, :birthday, :created_at, :username, :id
json.trips @user.trips, :location, :description, :arrival_date, :departure_date, :num_guests, :id
json.references @user.received_references, :id, :relationship, :experience, :description, :referencer_id
json.friends @user.accepted_friends, :id, :friend_details