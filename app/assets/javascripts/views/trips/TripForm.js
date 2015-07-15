SofaHopping.Views.TripForm = Backbone.View.extend({
  template: JST["trips/tripform"],

  events:{
    "click #close_trip_modal" : "destroyForm",
    "submit #create_trip": "createTrip"
  },

  render: function(){
    var renderedContent = this.template();
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

  createTrip: function(event){
    event.preventDefault();
    var attrs = $(event.currentTarget).serializeJSON().trip
    var trip = new SofaHopping.Models.Trip();
    trip.set(attrs);
    trip.save({}, {
      success: function(){
        Backbone.history.navigate("", { trigger: true })
        this.remove();
      }.bind(this)
    });
  }
})
