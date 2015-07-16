SofaHopping.Views.ProfileSidebarView = Backbone.View.extend({
  template: JST["users/profile_sidebar"],
  className: "profile-sidebar",
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
