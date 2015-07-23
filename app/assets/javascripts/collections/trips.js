SofaHopping.Collections.Trips = Backbone.Collection.extend({
  url: "/api/trips",
  model: SofaHopping.Models.Trip,

  comparator: function(trip){
    return (new Date(trip.get('arrival_date')).getTime());
  }
});
