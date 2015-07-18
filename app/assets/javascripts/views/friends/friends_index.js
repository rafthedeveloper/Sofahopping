SofaHopping.Views.FriendsIndex = Backbone.CompositeView.extend({
  template: JST["friends/friends_index"],


  addFriendView: function(friend){
    var friendView = new SofaHopping.Views.FriendsIndexItem({ model: friend, visitedUser: this.model, collection: this.collection });
    this.addSubview('.friends-list', friendView);
  },

  removeFriendView: function(friend){
    this.removeModelSubview('.friends-list', friend);
    debugger
    if (this.collection.length === 0) { this.$el.find(".friends-list").append("<li>No pending friend requests.</li>") }
  },

  initialize: function(options){
    this.listType = options.listType;
    this.listenTo(this.collection, "sync", this.render)
    this.listenTo(this.collection, "add", this.addFriendView);
    this.listenTo(this.collection, "remove", this.removeFriendView);
    this.collection.each(this.addFriendView.bind(this));
  },

  render: function(){
    var renderedContent = this.template({ listType: this.listType });
    this.$el.html(renderedContent);
    this.attachSubviews();

    return this;
  }
});
