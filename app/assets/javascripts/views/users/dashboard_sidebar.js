SofaHopping.Views.DashboardSidebar = Backbone.View.extend({
  template: JST["users/dashboard_sidebar"],
  tagName: "section",
  className: "sidebar",

  initialize: function(){
    this.listenTo(this.model, "sync", this.render)

  },

  render: function(){
    var renderedContent = this.template({ user: this.model,
                                          trips: this.model.trips() });
    this.$el.html(renderedContent);

    return this;
  }
});
