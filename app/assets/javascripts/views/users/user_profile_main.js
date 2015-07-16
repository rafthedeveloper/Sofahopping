SofaHopping.Views.ProfileMainView = Backbone.CompositeView.extend({
  template: JST["users/profile_main"],
  className: "profile-main",
  tagName: "section",

  initialize: function(){
    this.listenTo(this.model, "sync", this.render)
  },

  render: function(){
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);

    return this;
  },


});
