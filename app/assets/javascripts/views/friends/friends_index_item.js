SofaHopping.Views.FriendsIndexItem = Backbone.View.extend({
  template: JST["friends/friends_index_item"],
  className: "li",

  initialize: function(options){
    this.visitedUser = options.visitedUser;
  },

  render: function(){
    debugger
    var renderedContent = this.template({ friend: this.model, visitedUser: this.visitedUser });
    this.$el.html(renderedContent);

    return this;
  }
});
