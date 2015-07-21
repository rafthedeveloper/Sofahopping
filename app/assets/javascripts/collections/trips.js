SofaHopping.Collections.Trips = Backbone.Collection.extend({
  url: "/api/trips",
  model: SofaHopping.Models.Trip,

  comparator: function(trip){
    return -trip.get('id');
  }
});
