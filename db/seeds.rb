u1 = User.create!(
     username: "rafael",
     password: "password",
     fname: "rafael",
     lname: "maldonado",
     gender: "Male",
     birthday: "1989-06-01",
     location: "Brooklyn, New York",
     hosting_status: "MAYBE ACCEPTING GUESTS"
)

u2 = User.create!(
     username: "ivy",
     password: "password",
     fname: "ivy",
     lname: "liu",
     gender: "Female",
     birthday: "1989-09-21",
     location: "Taipei, Taiwan",
     hosting_status: "MAYBE ACCEPTING GUESTS"
)

u3 = User.create!(
     username: "tammy",
     password: "password",
     fname: "tammy",
     lname: "lum",
     gender: "Female",
     birthday: "1989-07-18",
     location: "Brooklyn, New York",
     hosting_status: "NOT ACCEPTING GUESTS
)

u4 = User.create!(
     username: "zach",
     password: "password",
     fname: "zach",
     lname: "arden",
     gender: "Male",
     birthday: "1988-03-29",
     location: "Taipei, Taiwan",
     hosting_status: "ACCEPTING GUESTS"
)
