SofaHopping.Views.TripsIndex = Backbone.CompositeView.extend({
  template: JST["trips/trips_index"],
  className: "trips dash-main-content",
  tagName: "section",

  addTripView: function(trip){
    var tripView = new SofaHopping.Views.TripIndexItem ({ model: trip, currentUser: this.model, collection: this.collection });
    this.addSubview('.trips-list', tripView);
  },

  removeTripView: function(trip){
    this.removeModelSubview('.trips-list', trip);
  },

  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "add", this.addTripView.bind(this));
    this.listenTo(this.collection, "remove", this.removeTripView.bind(this));
    this.collection.each(this.addTripView.bind(this));
  },

  render: function(){
    var renderedContent = this.template({ trips: this.model.trips() });
    this.$el.html(renderedContent);
    this.attachSubviews();

    return this;
  }
})
