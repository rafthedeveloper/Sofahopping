SofaHopping.Views.TripForm = Backbone.View.extend({
  template: JST["trips/tripform"],

  events:{
    "click #close_trip_modal" : "destroyForm",
    "submit #create_trip": "submitTrip",
    "click #delete_trip": "deleteTrip"
  },

  initialize: function(options){
    this.currentUser = options.currentUser;
  },

  render: function(){
    var renderedContent = this.template({ trip: this.model });
    this.$el.html(renderedContent);
    $("body").append(this.$el);
    this.createDatePicker();

    return this;
  },

  createDatePicker: function(){
    $( ".datepicker" ).datepicker({
      dateFormat: "dd/mm/yy"
    });
  },

  destroyForm: function(event){
    event.preventDefault();
    this.remove();
  },

  deleteTrip: function(event){
    event.preventDefault();
    var tripId = $(event.currentTarget).data("id");
    var trip = this.currentUser.trips().get(tripId);

    trip.destroy({
      success: function(model, response){
        debugger
        var successView = new SofaHopping.Views.SuccessMessage ({ message: response.message });
        successView.render();
        this.currentUser.trips().remove(trip);
        this.remove();
      }.bind(this),

      error: function(){

      }
    })

  },

  submitTrip: function(event){
    event.preventDefault();
    var attrs = $(event.currentTarget).serializeJSON().trip
    this.model.set(attrs)

    this.model.save({}, {
      error: function(trip, response){
        var $errorEl = this.$(".errors");
        var errors = JSON.parse(response.responseText)
        var errorView = new SofaHopping.Views.ErrorDetails({ errors: errors, el: $errorEl });
        errorView.render();

      }.bind(this),

      success: function(trip, response){
        debugger
        var successView = new SofaHopping.Views.SuccessMessage ({ message: response.message });
        successView.render();
        this.currentUser.trips().add(this.model, { merge: true });
        this.remove();
      }.bind(this)
    });
  }
})
