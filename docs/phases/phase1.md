# Phase 1: User Authentication, DashboardShow, MemberShow, MemberIndex (~1 day)

## Rails
### Models
* User
* Member

### Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy)
* Api::MembersController (index, show)

### Views
* users/new.html.erb
* session/new.html.erb
* members/index.json.jbuilder
* members/show.json.jbuilder

## Backbone
### Models
* User (to keep track of all collections under one logged in user model)
* Member

### Collections
* Members

### Views
* DashboardShow (compositeView, contains trips subviews (PHASE 2))
* MembersIndex (composite view, contains member index item subviews)
* MembersIndexItem
* MemberShow (composite view, contains friends and references subviews (PHASE 2 + PHASE 3))

## Gems/Libraries
