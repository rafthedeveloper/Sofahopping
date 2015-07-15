json.array! @travelers do |traveler|
  json.fname traveler[:fname]
  json.lname traveler[:lname]
  json.from traveler[:from]
  json.user_id traveler[:user_id]
  json.to traveler[:to]
  json.arrival_date traveler[:arrival_date]
  json.departure_date traveler[:departure_date]
  json.num_guests traveler[:num_guests]
  json.description traveler[:description]
end
