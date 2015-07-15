SofaHopping.Views.TripForm = Backbone.View.extend({
  template: JST["trips/tripform"],

  events:{
    "click #close_trip_modal" : "destroyForm",
    "click #cancel_trip": "destroyForm",
    "submit #create_trip": "createTrip"
  },

  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    $("body").append(this.$el);

    return this;
  },

  destroyForm: function(){
    console.log("CLOSE")
    this.remove();
  },

  createTrip: function(event){
    event.preventDefault();
    debugger
  }
})
