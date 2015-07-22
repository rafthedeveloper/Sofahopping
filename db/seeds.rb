
u1 = User.create!(
     username: "LebronJames",
     password: "password",
     fname: "LeBron",
     lname: "James",
     gender: "Male",
     birthday: "1984-12-30",
     location: "Cleveland, Ohio",
     hosting_status: "yes",
     avatar: File.open(Rails.root.join("app/assets/images/default.png"))
)

u2 = User.create!(
    username: "KevinDurant",
    password: "password",
    fname: "Kevin",
    lname: "Durant",
    gender: "Male",
    birthday: "1988-09-29",
    location: "Oklahoma City, Oklahoma",
    hosting_status: "yes"
)

u3 = User.create!(
    username: "StephenCurry",
    password: "password",
    fname: "Stephen",
    lname: "Curry",
    gender: "Male",
    birthday: "1988-03-14",
    location: "San Francisco, California",
    hosting_status: "yes"
)

u4 = User.create!(
  username: "CarmeloAnthony",
  password: "password",
  fname: "Carmelo",
  lname: "Anthony",
  gender: "Male",
  birthday: "1984-05-29",
  location: "New York, New York",
  hosting_status: "yes"
)

u5 = User.create!(
  username: "KobeBryant",
  password: "password",
  fname: "Kobe",
  lname: "Bryant",
  gender: "Male",
  birthday: "1978-08-23",
  location: "Los Angeles, California",
  hosting_status: "yes"
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
     friend_requestee: u2,
     friend_requester: u3,
     pending_status: "accepted"
  )

f6 = Friendship.create!(
     friend_requestee: u2,
     friend_requester: u4,
     pending_status: "accepted"
  )

f7 = Friendship.create!(
     friend_requestee: u3,
     friend_requester: u4,
     pending_status: "accepted"
  )

f8 = Friendship.create!(
     friend_requestee: u3,
     friend_requester: u5,
     pending_status: "accepted"
  )

f9 = Friendship.create!(
     friend_requestee: u4,
     friend_requester: u5,
     pending_status: "accepted"
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
     user_id: u1.id,
     location: "Japan",
     description: "Hey, I'm looking for a place to stay for a few days while I'm traveling! Hopefully someone on here can accomodate me.",
     arrival_date: "15/07/2015",
     departure_date: "18/07/2015",
     num_guests: 1
)

t3 = Trip.create!(
     user_id: u1.id,
     location: "Miami, Florida",
     description: "Hey, I'm looking for a place to stay for a few days while I'm traveling! Hopefully someone on here can accomodate me.",
     arrival_date: "15/07/2015",
     departure_date: "18/07/2015",
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






# u1 = User.create!(
#      username: "rafael",
#      password: "password",
#      fname: "Rafael",
#      lname: "Maldonado",
#      gender: "Male",
#      birthday: "1989-06-01",
#      location: "Brooklyn, New York",
#      hosting_status: "maybe"
# )
#
# u2 = User.create!(
#      username: "ivy",
#      password: "password",
#      fname: "Ivy",
#      lname: "Liu",
#      gender: "Female",
#      birthday: "1989-09-21",
#      location: "Taipei, Taiwan",
#      hosting_status: "maybe"
# )
#
# u3 = User.create!(
#      username: "tammy",
#      password: "password",
#      fname: "Tammy",
#      lname: "Lum",
#      gender: "Female",
#      birthday: "1989-07-18",
#      location: "Brooklyn, New York",
#      hosting_status: "no"
# )
#
# u4 = User.create!(
#      username: "zach",
#      password: "password",
#      fname: "Zach",
#      lname: "Arden",
#      gender: "Male",
#      birthday: "1988-03-29",
#      location: "Taipei, Taiwan",
#      hosting_status: "yes"
# )
#
# u5 = User.create!(
#      username: "joel",
#      password: "password",
#      fname: "Joel",
#      lname: "Burgos",
#      gender: "Male",
#      birthday: "1988-03-29",
#      location: "Taipei, Taiwan",
#      hosting_status: "yes"
# )
#
#
# u6 = User.create!(
#      username: "wanda",
#      password: "password",
#      fname: "Wanda",
#      lname: "Sanchez",
#      gender: "Female",
#      birthday: "1988-03-29",
#      location: "NYC",
#      hosting_status: "yes"
# )
#
# u7 = User.create!(
#      username: "emma",
#      password: "password",
#      fname: "Emma",
#      lname: "Watson",
#      gender: "Female",
#      birthday: "1988-03-29",
#      location: "NYC",
#      hosting_status: "yes"
# )
#
#
# t1 = Trip.create!(
#      user_id: u1.id,
#      location: "Iceland",
#      description: "Hey, I'm looking for a place to stay for a few days while I'm traveling! Hopefully someone on here can accomodate me.",
#      arrival_date: "15/07/2015",
#      departure_date: "18/07/2015",
#      num_guests: 1
# )
#
# t2 = Trip.create!(
#      user_id: u2.id,
#      location: "Japan",
#      description: "Hey, I'm looking for a place to stay for a few days while I'm traveling! Hopefully someone on here can accomodate me.",
#      arrival_date: "15/07/2015",
#      departure_date: "18/07/2015",
#      num_guests: 2
# )
#
# t3 = Trip.create!(
#      user_id: u3.id,
#      location: "Spain",
#      description: "Hey, I'm looking for a place to stay for a few days while I'm traveling! Hopefully someone on here can accomodate me.",
#      arrival_date: "15/07/2015",
#      departure_date: "18/07/2015",
#      num_guests: 1
# )
#
# t4 = Trip.create!(
#      user_id: u4.id,
#      location: "Montreal",
#      description: "Hey, I'm looking for a place to stay for a few days while I'm traveling! Hopefully someone on here can accomodate me.",
#      arrival_date: "15/07/2015",
#      departure_date: "18/07/2015",
#      num_guests: 3
# )
#

#
# r3 = Reference.create!(
#      referencer_id: u2.id,
#      referencee_id: u1.id,
#      relationship: "guest",
#      description: "What an awesome company to have, I would love to hang out with them again! Definitely a positive experience!",
#      experience: "negative"
# )
#
# r4 = Reference.create!(
#      referencer_id: u3.id,
#      referencee_id: u1.id,
#      relationship: "host",
#      description: "What an awesome company to have, I would love to hang out with them again! Definitely a positive experience!",
#      experience: "positive"
# )
#
# f1 = Friendship.create!(
#      friend_requestee: u1,
#      friend_requester: u2,
#      pending_status: "accepted"
#   )
#
# f2 = Friendship.create!(
#      friend_requestee: u1,
#      friend_requester: u3,
#      pending_status: "accepted"
#   )
#
# f3 = Friendship.create!(
#      friend_requestee: u1,
#      friend_requester: u4,
#      pending_status: "pending"
#   )
#
# f4 = Friendship.create!(
#      friend_requestee: u3,
#      friend_requester: u4,
#      pending_status: "accepted"
#   )
#
# f5 = Friendship.create!(
#      friend_requestee: u4,
#      friend_requester: u2,
#      pending_status: "accepted"
#   )
#
# f6 = Friendship.create!(
#    friend_requestee: u1,
#    friend_requester: u5,
#    pending_status: "pending"
# )
#
# f7 = Friendship.create!(
#      friend_requestee: u1,
#      friend_requester: u6,
#      pending_status: "pending"
#   )
