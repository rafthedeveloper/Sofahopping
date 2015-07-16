SofaHopping.Views.TripsIndex = Backbone.CompositeView.extend({
  template: JST["trips/trips_index"],
  className: "trips",
  tagName: "section",

  addTripView: function(trip){
    var tripView = new SofaHopping.Views.TripIndexItem ({ model: trip, currentUser: this.model });
    this.addSubview('.trips-list', tripView);
  },

  removeTripView: function(trip){
    this.removeModelSubview('.trips-list', trip);
  },

  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.trips(), "add", this.addTripView.bind(this));
    this.listenTo(this.model.trips(), "remove", this.removeTripView.bind(this));
    this.model.trips().each(this.addTripView.bind(this));
  },

  render: function(){
    var renderedContent = this.template({ trips: this.model.trips() });
    this.$el.html(renderedContent);
    this.attachSubviews();

    return this;
  }
})
