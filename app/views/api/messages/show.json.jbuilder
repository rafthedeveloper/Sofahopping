  json.id @message.id
  json.content @message.content
  json.created_at @message.created_at
  json.author_fname @user.fname
  json.author_lname @user.lname
  json.author_avatar_url asset_path(@user.avatar.url(:thumb))
  json.author_id @user.id
