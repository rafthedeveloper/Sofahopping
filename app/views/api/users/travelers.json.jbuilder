json.array! @travelers do |traveler|
  json.fname traveler.fname
  json.lname traveler.lname
  json.location traveler.location
  json.hosting_status traveler.hosting_status
  json.trips traveler.trips
end
