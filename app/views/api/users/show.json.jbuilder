json.extract! @user, :fname, :lname, :location, :hosting_status, :gender, :birthday, :created_at, :username

json.trips @user.trips, :location, :description, :arrival_date, :departure_date, :num_guests, :id
json.references @user.received_references, :relationship, :experience, :description, :author
