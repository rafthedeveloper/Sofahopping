# SofaHopping

[Project Link][project]

[project]: http://www.sofahopping.com

## Minimum Viable Product
SofaHopping is a clone of Couchsurfing built on Rails and Backbone. Users can:

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Search for all members
- [x] Search for all hosts
- [x] Create trips
- [x] Search for all travelers
- [x] Add friends
- [x] Create references
- [x] Create a comment on an event
- [x] Create a request
- [x] Comment on a request
- [x] Approve/Deny a request
- [x] Upload avatars

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: docs/views.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, DashboardShow, MemberShow, MemberIndex (~1 day)
I will be creating the user authentication in rails as taught in App Academy.
By the end of this phase, users will be able to create accounts, log in, log out,
view members index, member show page and dashboard. I will be adding a
member route to serve as the api, it will serve json back to the backbone app.
The most important part of this phase will be pushing the app to Heroku
and ensuring that these pieces work well together. I plan to grab all trips,
friends, references, requests of a user and store this in the user backbone model.

[Details][phase-one]

### Phase 2: Find hosts, create trips, find travelers (~2 days)
In this phase, I will add the ability to find hosts, find travelers
and creating trips. To create a trip, a user will be on the 'find hosts' view
page and a modal will pop up allowing them to create a trip. Hosts and travelers
will be found through a member's attribute 'hosting_status' which will be passed
as a parameter to the Api::MembersController#search function.

[Details][phase-two]

### Phase 3: Add friend and create references (~1 day)
In this phase, I will be adding the ability for users to add friends
and create references. At the end of this phase, users will have a friends show
page on their profile through the "has_many friends" association.
Also, users will be able to create references which will show up on a member's show page through the "has_many references" association.

[Details][phase-three]

### Phase 4: Messages and Requests (~1 day)
In this phase, I will be focusing on sending users a request to host them,
sending hosts a request to be hosted by them and also posting messages
on said requests. A user can also approve, deny or cancel a request.

[Details][phase-four]

### Bonus Features (TBD)

- [ ] Create Groups and Discussions
- [ ] Pagination/infinite scroll
- [ ] Nicer confirmation windows

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md


### TO DO
* geocoder api for location based searching
* rails enums for DB
