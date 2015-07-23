json.array! @trips do |trip|
  json.user_id trip.traveler[:id]
  json.fname trip.traveler[:fname]
  json.lname trip.traveler[:lname]
  json.from trip[:from]
  json.to trip[:to]
  json.arrival_date trip[:arrival_date]
  json.departure_date trip[:departure_date]
  json.num_guests trip[:num_guests]
  json.description trip[:description]
  json.avatar_url asset_path(trip.traveler.avatar.url(:original))
end
