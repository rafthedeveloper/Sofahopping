u1 = User.create!(
     username: "rafael",
     password: "password",
     fname: "rafael",
     lname: "maldonado",
     gender: "Male",
     birthday: "1989-06-01",
     location: "Brooklyn, New York",
     hosting_status: "Maybe Accepting Guests"
)

u2 = User.create!(
     username: "ivy",
     password: "password",
     fname: "ivy",
     lname: "liu",
     gender: "Female",
     birthday: "1989-09-21",
     location: "Taipei, Taiwan",
     hosting_status: "Maybe Accepting Guests"
)

u3 = User.create!(
     username: "tammy",
     password: "password",
     fname: "tammy",
     lname: "lum",
     gender: "Female",
     birthday: "1989-07-18",
     location: "Brooklyn, New York",
     hosting_status: "Not Accepting Guests"
)

u4 = User.create!(
     username: "zach",
     password: "password",
     fname: "zach",
     lname: "arden",
     gender: "Male",
     birthday: "1988-03-29",
     location: "Taipei, Taiwan",
     hosting_status: "Accepting Guests"
)

t1 = Trip.create!(
     user_id: u1.id,
     location: "Iceland",
     description: "Hey, I'm looking for a place to stay for a few days while I'm traveling!",
     arrival_date: "15/07/2015",
     departure_date: "18/07/2015",
     num_guests: 1
)

t2 = Trip.create!(
     user_id: u2.id,
     location: "Japan",
     description: "Hey, I'm looking for a place to stay for a few days while I'm traveling!",
     arrival_date: "15/07/2015",
     departure_date: "18/07/2015",
     num_guests: 2
)

t3 = Trip.create!(
     user_id: u3.id,
     location: "Spain",
     description: "Hey, I'm looking for a place to stay for a few days while I'm traveling!",
     arrival_date: "15/07/2015",
     departure_date: "18/07/2015",
     num_guests: 1
)

t4 = Trip.create!(
     user_id: u4.id,
     location: "Montreal",
     description: "Hey, I'm looking for a place to stay for a few days while I'm traveling!",
     arrival_date: "15/07/2015",
     departure_date: "18/07/2015",
     num_guests: 3
)

r1 = Reference.create!(
     referencer_id: u1.id,
     referencee_id: u2.id,
     relationship: "host",
     description: "they weere great!",
     experience: "positive"
)

r2 = Reference.create!(
     referencer_id: u3.id,
     referencee_id: u2.id,
     relationship: "guest",
     description: "they weere great!",
     experience: "positive"
)

r3 = Reference.create!(
     referencer_id: u2.id,
     referencee_id: u1.id,
     relationship: "guest",
     description: "they weere great!",
     experience: "positive"
)

r4 = Reference.create!(
     referencer_id: u3.id,
     referencee_id: u1.id,
     relationship: "host",
     description: "they weere great!",
     experience: "positive"
)

f1 = Friendship.create!(
     friend_requestee: u1,
     friend_requester: u2,
     pending_status: "accepted"
  )

f2 = Friendship.create!(
     friend_requestee: u3,
     friend_requester: u1,
     pending_status: "accepted"
  )

f3 = Friendship.create!(
     friend_requestee: u1,
     friend_requester: u4,
     pending_status: "rejected"
  )

f4 = Friendship.create!(
     friend_requestee: u3,
     friend_requester: u4,
     pending_status: "accepted"
  )

f5 = Friendship.create!(
     friend_requestee: u4,
     friend_requester: u2,
     pending_status: "accepted"
  )
