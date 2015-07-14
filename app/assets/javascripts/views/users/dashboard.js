SofaHopping.Views.DashboardView = Backbone.View.extend({
  template: JST["users/dashboard"],

  render: function(){
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);

    return this;
  }
});
