u1 = User.create!(
     username: "rafael",
     password: "password",
     fname: "Rafael",
     lname: "Maldonado",
     gender: "Male",
     birthday: "1989-06-01",
     location: "Brooklyn, New York",
     hosting_status: "maybe"
)

u2 = User.create!(
     username: "ivy",
     password: "password",
     fname: "Ivy",
     lname: "Liu",
     gender: "Female",
     birthday: "1989-09-21",
     location: "Taipei, Taiwan",
     hosting_status: "maybe"
)

u3 = User.create!(
     username: "tammy",
     password: "password",
     fname: "Tammy",
     lname: "Lum",
     gender: "Female",
     birthday: "1989-07-18",
     location: "Brooklyn, New York",
     hosting_status: "no"
)

u4 = User.create!(
     username: "zach",
     password: "password",
     fname: "Zach",
     lname: "Arden",
     gender: "Male",
     birthday: "1988-03-29",
     location: "Taipei, Taiwan",
     hosting_status: "yes"
)

u5 = User.create!(
     username: "joel",
     password: "password",
     fname: "Joel",
     lname: "Burgos",
     gender: "Male",
     birthday: "1988-03-29",
     location: "Taipei, Taiwan",
     hosting_status: "yes"
)


u6 = User.create!(
     username: "wanda",
     password: "password",
     fname: "Wanda",
     lname: "Sanchez",
     gender: "Female",
     birthday: "1988-03-29",
     location: "NYC",
     hosting_status: "yes"
)

u7 = User.create!(
     username: "emma",
     password: "password",
     fname: "Emma",
     lname: "Watson",
     gender: "Female",
     birthday: "1988-03-29",
     location: "NYC",
     hosting_status: "yes"
)


t1 = Trip.create!(
     user_id: u1.id,
     location: "Iceland",
     description: "Hey, I'm looking for a place to stay for a few days while I'm traveling! Hopefully someone on here can accomodate me.",
     arrival_date: "15/07/2015",
     departure_date: "18/07/2015",
     num_guests: 1
)

t2 = Trip.create!(
     user_id: u2.id,
     location: "Japan",
     description: "Hey, I'm looking for a place to stay for a few days while I'm traveling! Hopefully someone on here can accomodate me.",
     arrival_date: "15/07/2015",
     departure_date: "18/07/2015",
     num_guests: 2
)

t3 = Trip.create!(
     user_id: u3.id,
     location: "Spain",
     description: "Hey, I'm looking for a place to stay for a few days while I'm traveling! Hopefully someone on here can accomodate me.",
     arrival_date: "15/07/2015",
     departure_date: "18/07/2015",
     num_guests: 1
)

t4 = Trip.create!(
     user_id: u4.id,
     location: "Montreal",
     description: "Hey, I'm looking for a place to stay for a few days while I'm traveling! Hopefully someone on here can accomodate me.",
     arrival_date: "15/07/2015",
     departure_date: "18/07/2015",
     num_guests: 3
)

r1 = Reference.create!(
     referencer_id: u1.id,
     referencee_id: u2.id,
     relationship: "host",
     description: "What an awesome company to have, I would love to hang out with them again! Definitely a positive experience!",
     experience: "positive"
)

r2 = Reference.create!(
     referencer_id: u3.id,
     referencee_id: u2.id,
     relationship: "guest",
     description: "What an awesome company to have, I would love to hang out with them again! Definitely a positive experience!",
     experience: "positive"
)

r2 = Reference.create!(
     referencer_id: u5.id,
     referencee_id: u1.id,
     relationship: "guest",
     description: "What an awesome company to have, I would love to hang out with them again! Definitely a positive experience!",
     experience: "neutral"
)

r3 = Reference.create!(
     referencer_id: u2.id,
     referencee_id: u1.id,
     relationship: "guest",
     description: "What an awesome company to have, I would love to hang out with them again! Definitely a positive experience!",
     experience: "negative"
)

r4 = Reference.create!(
     referencer_id: u3.id,
     referencee_id: u1.id,
     relationship: "host",
     description: "What an awesome company to have, I would love to hang out with them again! Definitely a positive experience!",
     experience: "positive"
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
     friend_requestee: u3,
     friend_requester: u4,
     pending_status: "accepted"
  )

f5 = Friendship.create!(
     friend_requestee: u4,
     friend_requester: u2,
     pending_status: "accepted"
  )

f6 = Friendship.create!(
   friend_requestee: u1,
   friend_requester: u5,
   pending_status: "pending"
)

f7 = Friendship.create!(
     friend_requestee: u1,
     friend_requester: u6,
     pending_status: "pending"
  )
