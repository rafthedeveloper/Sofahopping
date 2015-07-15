SofaHopping.Views.DashboardView = Backbone.View.extend({
  template: JST["users/dashboard"],

  initialize: function(){
    this.listenTo(this.model, "sync", this.render)
  },

  render: function(){
    var renderedContent = this.template({ user: this.model, trips: this.model.trips() });
    this.$el.html(renderedContent);

    return this;
  }
});
