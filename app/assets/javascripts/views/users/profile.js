SofaHopping.Views.ProfileView = Backbone.View.extend({
  template: JST["users/profile"],

  initialize: function(){
    this.listenTo(this.model, "sync", this.render)
  },

  render: function(){
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);

    return this;
  }
});
