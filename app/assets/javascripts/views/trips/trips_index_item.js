SofaHopping.Views.TripIndexItem = Backbone.View.extend({
  template: JST["trips/trips_index_item"],
  className: "trip",
  tagName: "li",

  events: {
    "click #edit_trip": "editTripForm"
  },

  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
  },

  render: function(){
    var renderedContent = this.template({ trip: this.model });
    this.$el.html(renderedContent);

    return this;
  },

  editTripForm: function(){
    var tripForm = new SofaHopping.Views.TripForm({ model: this.model, currentUser: SofaHopping.currentUser });
    tripForm.render();
  }
})
