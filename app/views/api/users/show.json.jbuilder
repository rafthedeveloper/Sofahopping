json.extract! @user, :fname, :lname, :location, :hosting_status, :gender, :birthday, :created_at

json.trips @user.trips, :location, :description, :arrival_date, :departure_date, :num_guests
