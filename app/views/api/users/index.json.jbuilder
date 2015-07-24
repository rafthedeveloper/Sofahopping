json.array! @users do |user|
  json.fname user.fname
  json.lname user.lname
  json.location user.location
  json.hosting_status user.hosting_status
  json.id user.id
  json.num_refs user.received_references.length
  json.updated_at user.updated_at
  json.avatar_url asset_path(user.avatar.url(:original))
end
