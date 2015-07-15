# Phase 2: Find hosts, create trips, find travelers (~2 days)

## Rails
### Models
* Trip
* TravelDetail

### Controllers
* Api::TripsController (create, destroy, update)
* Api::MembersController (index)

### Views
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
* TripsNewForm
* TripEditForm
* TravelersIndex (composite view, contains travelers index item subview)
* TravelersIndexItem


## Gems/Libraries
* https://developers.google.com/places/webservice/autocomplete
