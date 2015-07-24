json.extract! current_user,  :fname, :lname, :location, :hosting_status, :gender, :birthday, :created_at, :username, :id
json.avatar_url asset_path(current_user.avatar.url(:original))
json.friends current_user.accepted_friends
json.pending_friends current_user.pending_friends
