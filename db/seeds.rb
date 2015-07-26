u1 = User.create!(
     username: "LebronJames",
     password: "password",
     fname: "LeBron",
     lname: "James",
     gender: "Male",
     birthday: "1984-12-30",
     location: "Cleveland, Ohio",
     hosting_status: "yes",
     avatar: File.open(Rails.root.join("app/assets/images/lebron-james.jpg"))
)

u2 = User.create!(
    username: "KevinDurant",
    password: "password",
    fname: "Kevin",
    lname: "Durant",
    gender: "Male",
    birthday: "1988-09-29",
    location: "Oklahoma City, Oklahoma",
    hosting_status: "yes",
    avatar: File.open(Rails.root.join("app/assets/images/kevin-durant.jpg"))
)

u3 = User.create!(
    username: "StephenCurry",
    password: "password",
    fname: "Stephen",
    lname: "Curry",
    gender: "Male",
    birthday: "1988-03-14",
    location: "San Francisco, California",
    hosting_status: "yes",
    avatar: File.open(Rails.root.join("app/assets/images/stephen-curry.jpg"))
)

u4 = User.create!(
  username: "CarmeloAnthony",
  password: "password",
  fname: "Carmelo",
  lname: "Anthony",
  gender: "Male",
  birthday: "1984-05-29",
  location: "New York, New York",
  hosting_status: "yes",
  avatar: File.open(Rails.root.join("app/assets/images/carmelo-anthony.jpg"))
)

u5 = User.create!(
  username: "KobeBryant",
  password: "password",
  fname: "Kobe",
  lname: "Bryant",
  gender: "Male",
  birthday: "1978-08-23",
  location: "Los Angeles, California",
  hosting_status: "yes",
  avatar: File.open(Rails.root.join("app/assets/images/kobe-bryant.jpg"))
)

u6 = User.create!(
  username: "RussellWestbrook",
  password: "password",
  fname: "Russell",
  lname: "Westbrook",
  gender: "Male",
  birthday: "1978-08-23",
  location: "Oklahoma City, Oklahoma",
  hosting_status: "yes",
  avatar: File.open(Rails.root.join("app/assets/images/russell-westbrook.jpg"))
)

u7 = User.create!(
  username: "ChrisPaul",
  password: "password",
  fname: "Chris",
  lname: "Paul",
  gender: "Male",
  birthday: "1978-08-23",
  location: "Los Angeles, California",
  hosting_status: "no",
  avatar: File.open(Rails.root.join("app/assets/images/chris-paul.jpg"))
)

u8 = User.create!(
  username: "KevinGarnett",
  password: "password",
  fname: "Kevin",
  lname: "Garnett",
  gender: "Male",
  birthday: "1978-08-23",
  location: "Minneapolis, Minnesota",
  hosting_status: "no",
  avatar: File.open(Rails.root.join("app/assets/images/kevin-garnett.jpg"))
)

u9 = User.create!(
  username: "TimDuncan",
  password: "password",
  fname: "Tim",
  lname: "Duncan",
  gender: "Male",
  birthday: "1978-08-23",
  location: "San Antonio, Texas",
  hosting_status: "maybe",
  avatar: File.open(Rails.root.join("app/assets/images/tim-duncan.jpg"))
)

u10 = User.create!(
  username: "DerrickRose",
  password: "password",
  fname: "Derrick",
  lname: "Rose",
  gender: "Male",
  birthday: "1978-08-23",
  location: "Chicago, Illinois",
  hosting_status: "maybe",
  avatar: File.open(Rails.root.join("app/assets/images/derrick-rose.jpg"))
)




f1 = Friendship.create!(
     friend_requestee: u1,
     friend_requester: u2,
     pending_status: "accepted"
  )

f2 = Friendship.create!(
     friend_requestee: u1,
     friend_requester: u3,
     pending_status: "accepted"
  )

f3 = Friendship.create!(
     friend_requestee: u1,
     friend_requester: u4,
     pending_status: "pending"
  )

f4 = Friendship.create!(
     friend_requestee: u1,
     friend_requester: u5,
     pending_status: "pending"
  )

f5 = Friendship.create!(
     friend_requestee: u1,
     friend_requester: u6,
     pending_status: "pending"
  )

f6 = Friendship.create!(
     friend_requestee: u1,
     friend_requester: u7,
     pending_status: "pending"
  )

f7 = Friendship.create!(
     friend_requestee: u1,
     friend_requester: u8,
     pending_status: "pending"
  )

f8 = Friendship.create!(
     friend_requestee: u1,
     friend_requester: u9,
     pending_status: "accepted"
  )

f9 = Friendship.create!(
   friend_requestee: u1,
   friend_requester: u10,
   pending_status: "accepted"
  )




t1 = Trip.create!(
     user_id: u1.id,
     from: u1.location,
     to: "Iceland",
     description: "Hey, I'm looking for a place to stay for a few days while I'm traveling! Hopefully someone on here can accomodate me.",
     arrival_date: "15/07/2015",
     departure_date: "18/07/2015",
     num_guests: 1
)

t2 = Trip.create!(
     user_id: u1.id,
     from: u1.location,
     to: "Japan",
     description: "Hey, I'm looking for a place to stay for a few days while I'm traveling! Hopefully someone on here can accomodate me.",
     arrival_date: "19/07/2015",
     departure_date: "21/07/2015",
     num_guests: 1
)

t3 = Trip.create!(
     user_id: u1.id,
     from: u1.location,
     to: "Miami, Florida",
     description: "Hey, I might be going back out to Miami if it doesn't work out for me here in Cleveland. I'm looking for someone who's cool to hang out with and is willing to host me while I play some basketball.",
     arrival_date: "22/07/2015",
     departure_date: "23/07/2015",
     num_guests: 1
)

t4 = Trip.create!(
     user_id: u1.id,
     from: u1.location,
     to: "Manhattan, New York",
     description: "Hey, I'm heading to New York on Monday, can anyone host me?",
     arrival_date: "26/07/2015",
     departure_date: "29/07/2015",
     num_guests: 1
)

t5 = Trip.create!(
     user_id: u2.id,
     from: u2.location,
     to: "Manhattan, New York",
     description: "Hey, I'm heading to New York on Monday, can anyone host me?",
     arrival_date: "26/07/2015",
     departure_date: "29/07/2015",
     num_guests: 1
)

t6 = Trip.create!(
     user_id: u3.id,
     from: u3.location,
     to: "Manhattan, New York",
     description: "Hey, I'm heading to New York on Monday, can anyone host me?",
     arrival_date: "26/07/2015",
     departure_date: "29/07/2015",
     num_guests: 1
)

t7 = Trip.create!(
     user_id: u4.id,
     from: u4.location,
     to: "Manhattan, New York",
     description: "Hey, I'm heading to New York on Monday, can anyone host me?",
     arrival_date: "26/07/2015",
     departure_date: "29/07/2015",
     num_guests: 1
)

t8 = Trip.create!(
     user_id: u5.id,
     from: u5.location,
     to: "Manhattan, New York",
     description: "Hey, I'm heading to New York on Monday, can anyone host me?",
     arrival_date: "26/07/2015",
     departure_date: "29/07/2015",
     num_guests: 1
)

t9 = Trip.create!(
     user_id: u6.id,
     from: u6.location,
     to: "Manhattan, New York",
     description: "Hey, I'm heading to New York on Monday, can anyone host me?",
     arrival_date: "26/07/2015",
     departure_date: "29/07/2015",
     num_guests: 1
)

t10 = Trip.create!(
     user_id: u7.id,
     from: u7.location,
     to: "Manhattan, New York",
     description: "Hey, I'm heading to New York on Monday, can anyone host me?",
     arrival_date: "26/07/2015",
     departure_date: "29/07/2015",
     num_guests: 1
)

t11 = Trip.create!(
     user_id: u8.id,
     from: u8.location,
     to: "Manhattan, New York",
     description: "Hey, I'm heading to New York on Monday, can anyone host me?",
     arrival_date: "26/07/2015",
     departure_date: "29/07/2015",
     num_guests: 1
)

t12 = Trip.create!(
     user_id: u9.id,
     from: u9.location,
     to: "Manhattan, New York",
     description: "Hey, I'm heading to New York on Monday, can anyone host me?",
     arrival_date: "26/07/2015",
     departure_date: "29/07/2015",
     num_guests: 1
)

t13 = Trip.create!(
     user_id: u10.id,
     from: u10.location,
     to: "Manhattan, New York",
     description: "Hey, I'm heading to New York on Monday, can anyone host me?",
     arrival_date: "26/07/2015",
     departure_date: "29/07/2015",
     num_guests: 1
)

r1 = Reference.create!(
     referencer_id: u2.id,
     referencee_id: u1.id,
     relationship: "host",
     description: "What an awesome company to have, I would love to hang out with them again! Definitely a positive experience!",
     experience: "positive"
)

r2 = Reference.create!(
     referencer_id: u3.id,
     referencee_id: u1.id,
     relationship: "guest",
     description: "What bad company to have, I would hate to hang out with them again! Definitely a negative experience!",
     experience: "negative"
)

r3 = Reference.create!(
     referencer_id: u4.id,
     referencee_id: u1.id,
     relationship: "friend",
     description: "What an ok company to have, I would maybe like to hang out with them again! Definitely an ok experience!",
     experience: "neutral"
)

r4 = Reference.create!(
     referencer_id: u1.id,
     referencee_id: u2.id,
     relationship: "host",
     description: "What an ok company to have, I would maybe like to hang out with them again! Definitely an ok experience!",
     experience: "neutral"
)

r5 = Reference.create!(
     referencer_id: u1.id,
     referencee_id: u3.id,
     relationship: "host",
     description: "What an ok company to have, I would maybe like to hang out with them again! Definitely an ok experience!",
     experience: "neutral"
)

r6 = Reference.create!(
     referencer_id: u1.id,
     referencee_id: u4.id,
     relationship: "host",
     description: "What an ok company to have, I would maybe like to hang out with them again! Definitely an ok experience!",
     experience: "neutral"
)

r7 = Reference.create!(
     referencer_id: u1.id,
     referencee_id: u5.id,
     relationship: "host",
     description: "What an ok company to have, I would maybe like to hang out with them again! Definitely an ok experience!",
     experience: "neutral"
)

r8 = Reference.create!(
     referencer_id: u2.id,
     referencee_id: u3.id,
     relationship: "host",
     description: "What an ok company to have, I would maybe like to hang out with them again! Definitely an ok experience!",
     experience: "neutral"
)

r9 = Reference.create!(
     referencer_id: u2.id,
     referencee_id: u4.id,
     relationship: "host",
     description: "What an ok company to have, I would maybe like to hang out with them again! Definitely an ok experience!",
     experience: "neutral"
)

r10 = Reference.create!(
     referencer_id: u2.id,
     referencee_id: u5.id,
     relationship: "host",
     description: "What an ok company to have, I would maybe like to hang out with them again! Definitely an ok experience!",
     experience: "neutral"
)

r11 = Reference.create!(
     referencer_id: u3.id,
     referencee_id: u2.id,
     relationship: "host",
     description: "What an ok company to have, I would maybe like to hang out with them again! Definitely an ok experience!",
     experience: "neutral"
)

req5 = Request.create!(
  requester_id: u5.id,
  requestee_id: u1.id,
  location: u1.location,
  message: "Hey I'd appreciate it if you would host me when I visit " + u1.location.to_s + " thanks!",
  arrival_date: "10/09/2015",
  departure_date: "15/09/2015",
  num_guests: 1,
  requester_type: "guest",
  status: "accepted"
)

req6 = Request.create!(
  requester_id: u6.id,
  requestee_id: u1.id,
  location: u1.location,
  message: "Hey I'd appreciate it if you would host me when I visit " + u1.location.to_s + " thanks!",
  arrival_date: "10/09/2015",
  departure_date: "15/09/2015",
  num_guests: 1,
  requester_type: "guest",
  status: "rejected"
)

req1 = Request.create!(
  requester_id: u2.id,
  requestee_id: u1.id,
  location: u1.location,
  message: "Hey I'd appreciate it if you would host me when I visit " + u1.location.to_s + " thanks!",
  arrival_date: "10/09/2015",
  departure_date: "15/09/2015",
  num_guests: 1,
  requester_type: "guest"
)

req2 = Request.create!(
  requester_id: u3.id,
  requestee_id: u1.id,
  location: u1.location,
  message: "Hey I'd appreciate it if you would host me when I visit " + u1.location.to_s + " thanks!",
  arrival_date: "10/09/2015",
  departure_date: "15/09/2015",
  num_guests: 1,
  requester_type: "guest"
)

req3 = Request.create!(
  requester_id: u4.id,
  requestee_id: u1.id,
  location: u1.location,
  message: "Hey I'd appreciate it if you would host me when I visit " + u1.location.to_s + " thanks!",
  arrival_date: "10/09/2015",
  departure_date: "15/09/2015",
  num_guests: 1,
  requester_type: "guest"
)






#
# i = 0;
# while (i < 500) do
#   hosting_statuses = ["yes", "maybe", "no"]
#   User.create!(
#     username: "user" + i.to_s,
#     password: "password",
#     fname: Faker::Name.first_name,
#     lname: Faker::Name.last_name,
#     gender: "other",
#     birthday: "29/10/1969",
#     location: Faker::Address.state,
#     hosting_status: hosting_statuses.sample
#   )
#   i+=1
# end
