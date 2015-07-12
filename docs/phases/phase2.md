# Phase 2: Find hosts, create trips, find travelers (~2 days)

## Rails
### Models
* Trip

### Controllers
* Api::TripsController (create, destroy, index)
* Api::MembersController (index, search)

### Views
* trips/index.json.jbuilder
* members/index.json.jbuilder (will serve both #index and #search)

## Backbone
### Models
* Trip

### Collections
* Trips

### Views
* HostsIndex (composite view, contains hosts index item subview)
* HostsIndexItem
* TripsIndex (composite view, contains trips index item subview)
* TripsIndexItem
* TravelersIndex (composite view, contains travelers index item subview)
* TravelersIndexItem


## Gems/Libraries
