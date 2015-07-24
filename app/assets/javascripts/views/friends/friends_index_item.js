
 SofaHopping.Views.FriendsIndexItem = Backbone.View.extend({

  template: JST["friends/friends_index_item"],
  tagName: "li",
  class: "group",

  events: {
    "click #delete_friend": "destroyFriendship",
    "click #accept_friend_request": "acceptFriendRequest",
    "click #reject_friend_request": "destroyFriendship"
  },

  initialize: function(options){
    this.visitedUser = options.visitedUser;
    this.listType = options.listType
  },

  render: function(){

    var renderedContent = this.template({ friend: this.model, visitedUser: this.visitedUser, listType: this.listType });
    this.$el.html(renderedContent);

    return this;
  },

  acceptFriendRequest: function(event){
    event.preventDefault();

    this.model.set("pending_status", "accepted");
    this.model.save({}, {
      success: function(model, response){
        SofaHopping.currentUser.friends().add(this.model);
        var success = new SofaHopping.Views.SuccessMessage({ message: response.message });
        success.render();
        this.collection.remove(this.model)
      }.bind(this)
    })
  },

  destroyFriendship: function(event){
    event.preventDefault();

    this.model.destroy({
      success: function(model, response){
        SofaHopping.currentUser.pendingFriends().remove(this.model);
        var success = new SofaHopping.Views.SuccessMessage({ message: response.message });
        success.render();
      }.bind(this)
    });

  }
});
