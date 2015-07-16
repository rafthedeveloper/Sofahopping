SofaHopping.Views.TripsIndex = Backbone.CompositeView.extend({
  template: JST["trips/trips_index"],
  className: "trips",
  tagName: "section",
  
  initialize: function(){
    this.listenTo(this.model, "sync", this.render)
  },

  render: function(){

    var renderedContent = this.template({ trips: this.model.trips() });
    this.$el.html(renderedContent);

    return this;
  }
})
