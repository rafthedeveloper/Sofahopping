SofaHopping.Views.TripsIndex = Backbone.CompositeView.extend({
  template: JST["trips/trips_index"],
  className: "trips dash-main-content",
  tagName: "section",

  events:{
    "click #create-trip": "doStuff"
  },

  addTripView: function(trip){

    var tripView = new SofaHopping.Views.TripIndexItem ({ model: trip, currentUser: this.model, collection: this.collection });
    this.addSubview('.trips-list', tripView);


  },

  removeTripView: function(trip){
    this.removeModelSubview('.trips-list', trip);
    if (this.collection.length === 0) { this.$(".trips-list").addClass("none") }
  },

  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
  },

  doStuff: function(event){
    Backbone.history.navigate("members/hosts", { trigger: true })
    $("#create_trip").trigger("click");
  },

  render: function(){
    var renderedContent = this.template({});
    this.$el.html(renderedContent);

    this.collection.each(this.addTripView.bind(this));

    if (this.collection.length > 0) { this.$(".trips-list").removeClass("none") }
    return this;
  }
})
