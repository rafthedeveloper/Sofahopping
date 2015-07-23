json.extract! current_user, :id
json.avatar_url asset_path(current_user.avatar.url(:original))
