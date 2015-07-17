SofaHopping.Views.FriendsIndex = Backbone.CompositeView.extend({
  template: JST["friends/friends_index"],

  addFriendView: function(friend){
    var friendView = new SofaHopping.Views.FriendsIndexItem({ model: friend, visitedUser: this.model, collection: this.collection });
    this.addSubview('.friends-list', friendView);
  },

  removeFriendView: function(friend){
    this.removeModelSubview('.friends-list', friend);
  },

  initialize: function(){
    this.listenTo(this.collection, "sync", this.render)
    this.listenTo(this.collection, "add", this.addFriendView);
    this.listenTo(this.collection, "remove", this.removeFriendView);
    this.collection.each(this.addFriendView.bind(this));
  },

  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();

    return this;
  }
});
