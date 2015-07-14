# Phase 1: User Authentication, DashboardShow, MemberShow, MemberIndex (~1 day)

## Rails
### Models
* User

### Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy)
* Api::UsersController (index, show)

### Views
* users/new.html.erb
* session/new.html.erb
* users/index.json.jbuilder
* users/show.json.jbuilder
* user.json.jbuilder (partial)

## Backbone
### Models
* User (to keep track of all collections under one logged in user model)


### Collections
* Users

### Views
* DashboardShow (compositeView, contains trips subviews (PHASE 2))
* MembersIndex (composite view, contains member index item subviews)
* MembersIndexItem
* MemberShow (composite view, contains friends and references subviews (PHASE 2 + PHASE 3))

## Gems/Libraries
