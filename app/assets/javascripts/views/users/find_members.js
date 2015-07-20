SofaHopping.Views.MembersView = Backbone.View.extend({
  template: JST["users/members"],

  events: {
    "click #create_trip": "addTripForm"
  },

  initialize: function(options){
    this.listenTo(this.collection, "sync", this.render);
    this.searchType = options.searchType;
  },

  render: function(){
    var renderedContent = this.template({ members: this.collection,
                                          searchType: this.searchType });
    this.$el.html(renderedContent);

    return this;
  },

  addTripForm: function(event){
    event.preventDefault();
    var newTrip = new SofaHopping.Models.Trip({});
    var tripForm = new SofaHopping.Views.TripForm({ model: newTrip, currentUser: SofaHopping.currentUser });
    tripForm.render();

  }
})
