# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## members
column name    | data type | details
---------------|-----------|-----------------------------------------
id             | integer   | not null, primary key
user_id        | integer   | not null, foreign key (references users)
fname          | string    | not null
lname          | string    | not null
hosting_status | string    | not null
gender         | string    | not null
birthday       | date      | not null
location       | string    | not null

## trips
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
user_id          | integer   | not null, foreign key (references users)
location         | string    | not null
description      | text      | not null
arrival_date     | datetime  | not null
departure_date   | datetime  | not null
num_guests       | integer   | not null


## friends
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
adder       | integer   | not null, foreign key (references users)
addee       | integer   | not null, foreign key (references users)

## references
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
referencee   | integer   | not null, foreign key (references users)
referencer   | integer   | not null, foreign key (references users)
relationship | string    | not null
experience   | string    | not null
description  | text      | not null

## requests
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
host_id        | integer   | not null, foreign key (references users)
guest_id       | integer   | not null, foreign key (references users)
message        | text      | not null
status         | string    | not null

## comments
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
author_id      | integer   | not null, foreign key (references users)
body           | text      | not null
type           | string    | not null
type_id        | integer   | not null, foreign key (references request, reference or event)
