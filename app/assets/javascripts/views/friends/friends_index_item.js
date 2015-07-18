SofaHopping.Views.FriendsIndexItem = Backbone.View.extend({
  template: JST["friends/friends_index_item"],
  className: "li",

  events: {
    "click #delete_friend": "destroyFriendship",
    "click #accept_friend_request": "acceptFriendRequest",
    "click #reject_friend_request": "destroyFriendship"
  },

  initialize: function(options){
    this.visitedUser = options.visitedUser;
  },

  render: function(){

    var renderedContent = this.template({ friend: this.model, visitedUser: this.visitedUser });
    this.$el.html(renderedContent);

    return this;
  },

  acceptFriendRequest: function(event){
    event.preventDefault();

    this.model.set("pending_status", "accepted");
    this.model.save({}, {
      success: function(model, response){
        debugger
        this.collection.remove(this.model)
      }.bind(this)
    })
  },

  destroyFriendship: function(event){
    event.preventDefault();
    this.model.destroy({});

  }
});
