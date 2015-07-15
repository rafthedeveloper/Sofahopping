SofaHopping.Views.MembersView = Backbone.View.extend({
  template: JST["users/members"],

  events: {
    "click #create_trip": "addTripForm"
  },

  initialize: function(){
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function(){
    var renderedContent = this.template({ members: this.collection });
    this.$el.html(renderedContent);

    return this;
  },

  addTripForm: function(){
    console.log("ADD TRIP");
    var tripForm = new SofaHopping.Views.TripForm({});
    tripForm.render();
  }
})
