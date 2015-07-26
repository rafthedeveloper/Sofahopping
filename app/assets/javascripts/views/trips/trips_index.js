SofaHopping.Views.TripsIndex = Backbone.CompositeView.extend({
  template: JST["trips/trips_index"],
  className: "trips user-main-content group",
  tagName: "section",

  events:{
    "click #create-trip": "createTripForm"
  },

  initialize: function(){
    this.listenTo(this.collection, "sync add remove", this.render);
    this.listenTo(this.collection, "remove", this.removeTripView);

  },

  render: function(){
    var renderedContent = this.template({});
    this.$el.html(renderedContent);
    this.collection.each(this.addTripView.bind(this));
    return this;
  },

  addTripView: function(trip){
    var tripView = new SofaHopping.Views.TripIndexItem({
      model: trip,
      currentUser: this.model,
      collection: this.collection
    });
    this.$(".trips-list").removeClass("none");

    this.addSubview('.trips-list', tripView);

  },

  addSubview: function (selector, subview, prepend) {

    var allSubviews = this.subviews(selector)._wrapped;
    var isNotIn = allSubviews.every(function(view){
        return view.model.id !== subview.model.id
      });


    if (isNotIn){
        this.subviews(selector).push(subview);

      }

this.attachSubview(selector, subview, prepend);
    subview.render();
  },



  removeTripView: function(trip){
    this.removeModelSubview('.trips-list', trip);
    if (this.collection.length === 0) { this.$(".trips-list").addClass("none"); }
  },

  createTripForm: function(event){
    event.preventDefault();
    var newTrip = new SofaHopping.Models.Trip();
    var tripForm = new SofaHopping.Views.TripForm({
      model: newTrip,
      collection: this.collection
    });

    tripForm.render();
  }
});
