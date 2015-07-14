SofaHopping.Views.MembersView = Backbone.View.extend({
  template: JST["users/members"],

  initialize: function(){
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function(){
    var renderedContent = this.template({ members: this.collection });
    this.$el.html(renderedContent);

    return this;
  }
})
