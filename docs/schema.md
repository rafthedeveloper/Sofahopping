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
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
user_id        | integer   | not null, foreign key (references users)
location       | string    | not null

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
status         | string    | not null

## travel_details
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
arrival_date   | datetime  | not null
departure_date | datetime  | not null
flexible       | boolean   | not null
num_guests     | integer   | not null
description    | text      | not null
type           | string    | not null, foreign key (references trip or request)
type_id        | integer   | not null, foreign key (references trip id or request id)

## comments
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
author_id      | integer   | not null, foreign key (references users)
body           | text      | not null
type           | string    | not null
type_id        | integer   | not null, foreign key (references request, reference or event)

## events
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
name           | string    | not null
location       | string    | not null
start_time     | datetime  | not null
end_time       | datetime  | not null
attendee_limit | integer   | not null
description    | text      | not null

## attendees
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
attendee_id    | integer   | not null, foreign key (references users)
event_id       | integer   | not null, foreign key (references events)

## organizers
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
organizer_id   | integer   | not null, foreign key (references users)
event_id       | integer   | not null, foreign key (references events)
