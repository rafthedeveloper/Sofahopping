SofaHopping.Views.RootView = Backbone.View.extend({
  template: JST["shared/root"],

  render: function(){

    var renderedContent = this.template({});
    this.$el.html(renderedContent);

    return this
  }
});
