# Phase 5: Searching for Blogs and Posts

## Rails
### Models
* Event
* Attendee
* Organizer

### Controllers
* Api::EventsController (index, show, create, update, destroy)
* Api::AttendeesController (create, destroy)
* Api::OrganizersController (create, destroy)

### Views

## Backbone
### Models
* Event
* Attendee
* Organizer

### Collections
* Events
* Attendees
* Organizers

### Views
* EventsIndexView (composite view, contains events index item subviews and CommentsIndexView subview)
* EventsIndexItem
* CommentsIndexView (composite view, contains comments index item subviews)
* CommentsIndexItem
* AttendeesIndexView (composite view, contains attendees index item subviews)
* AttendeesIndexItem
* OrganizersIndexView

## Gems/Libraries
