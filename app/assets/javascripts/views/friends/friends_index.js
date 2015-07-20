SofaHopping.Views.FriendsIndex = Backbone.CompositeView.extend({
  template: JST["friends/friends_index"],
  id: "friends",

  addFriendView: function(friend){
    var friendView = new SofaHopping.Views.FriendsIndexItem({ model: friend, visitedUser: this.model, collection: this.collection });
    this.addSubview('.friends-list', friendView);
    this.$(".friends-list").removeClass("none")
  },

  removeFriendView: function(friend){
    this.removeModelSubview('.friends-list', friend);
    if (this.collection.length === 0) { this.$(".friends-list").addClass("none") }

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
