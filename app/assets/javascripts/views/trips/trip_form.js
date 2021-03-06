SofaHopping.Views.TripForm = Backbone.View.extend({
  template: JST["trips/tripform"],

  events:{
    "click #close_trip_modal" : "destroyForm",
    "click #cancel_trip_form": "destroyForm",
    "click #delete_trip": "deleteTrip",
    "submit #create_trip": "submitTrip"
  },

  render: function(){
    var renderedContent = this.template({ trip: this.model });
    this.$el.html(renderedContent);
    $("body").append(this.$el);
    this.createDatePicker();
    this.addAutocomplete();

    return this;
  },

  destroyForm: function(event){
    event && event.preventDefault();
    this.remove();
  },

  deleteTrip: function(event){
    event.preventDefault();
    var tripId = $(event.currentTarget).data("id");
    var trip = this.collection.get(tripId);

    trip.destroy({
      success: function(model, response){
        var success = new SofaHopping.Views.SuccessMessage({ message: response.message });
        success.render();
        this.remove();
      }.bind(this),
    });
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

      success: function(){
        this.collection.add(this.model, { merge: true });
        var success = new SofaHopping.Views.SuccessMessage({ message: "Successfully created trip to " + this.model.get('to') + "." });
        success.render();
        this.destroyForm();
      }.bind(this)
    });
  },

  addAutocomplete: function(){
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {HTMLInputElement} */(document.getElementById('autocomplete')),
        { types: ['geocode'] });
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
    });
  },


  createDatePicker: function(){
    $( ".datepicker" ).datepicker({
      minDate: 0,
      dateFormat: "yy-mm-dd"
    });
  }
})
