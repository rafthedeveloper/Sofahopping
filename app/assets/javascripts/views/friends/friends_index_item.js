SofaHopping.Views.FriendsIndexItem = Backbone.View.extend({
  template: JST["friends/friends_index_item"],
  className: "li",

  events: {
    "click #delete_friend": "removeFriend"
  },

  initialize: function(options){
    this.visitedUser = options.visitedUser;
  },

  render: function(){
    var renderedContent = this.template({ friend: this.model, visitedUser: this.visitedUser });
    this.$el.html(renderedContent);

    return this;
  },

  removeFriend: function(event){
    event.preventDefault();
    this.model.destroy({});

  }
});
