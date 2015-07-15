# Phase 2: Find hosts, create trips, find travelers (~2 days)

## Rails
### Models
* Trip

### Controllers
* Api::TripsController (create, destroy, update)

### Views
* members/index.json.jbuilder

## Backbone
### Models
* Trip

### Collections
* Trips

### Views

* TripsIndex (composite view, contains trips index item subview)
* TripsIndexItem
* TripsNewForm
* TripEditForm

## Gems/Libraries
* https://developers.google.com/places/webservice/autocomplete
