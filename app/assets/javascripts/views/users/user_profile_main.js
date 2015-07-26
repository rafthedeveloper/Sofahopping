SofaHopping.Views.ProfileMainView = Backbone.CompositeView.extend({
  template: JST["users/profile_main"],
  className: "profile-main",
  tagName: "section",

  events: {
    "click #add_friend": "createFriend",
    "click #remove_friend": "removeFriend",
    "click #make_request": "makeRequest",

  },

  addReferencesView: function(){
    var referencesView = new SofaHopping.Views.ReferencesIndex({
      model: this.model, collection: this.model.references(), currentUser: this.currentUser
    });
    this.addSubview(".user-profile-main", referencesView);
  },

  addFriendshipsView: function(){
    var friendshipsView = new SofaHopping.Views.FriendsIndex({
      model: this.model, collection: this.model.friends()
    });
    this.addSubview(".user-profile-main", friendshipsView);
  },

  addOverviewView: function(){
    var overviewView = new SofaHopping.Views.Overview({
      model: this.model
    });
    this.addSubview(".user-profile-main", overviewView);
  },

  initialize: function(options){
    this.currentUser = options.currentUser;
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.currentUser, "sync", this.render);
    this.listenTo(this.currentUser.pendingFriends(), "add", this.render);
    this.listenTo(this.model.friends(), "remove", this.render);
    this.addOverviewView();
    this.addReferencesView();
    this.addFriendshipsView();
  },

  render: function(){
    var renderedContent = this.template({ user: this.model, currentUser: this.currentUser });
    this.$el.html(renderedContent);
    $("small.timeago").timeago();
    this.attachSubviews();


    return this;
  },

  createFriend: function(event){
    event.preventDefault();
    var newFriend = new SofaHopping.Models.Friend({});
    newFriend.set("friend_id", this.model.id);
    newFriend.set("requestee_id", this.model.id);

    newFriend.save({}, {
      success: function(){
        var success = new SofaHopping.Views.SuccessMessage({ message: "Successfully sent friend request." });
        success.render();
        this.currentUser.pendingFriends().add(newFriend);
      }.bind(this)
    })
  },

  removeFriend: function(event){
    event.preventDefault();

    var added_friend = this.currentUser.friends().findWhere({ friend_id: this.model.id });
    added_friend.destroy({
      success: function(){
        var success = new SofaHopping.Views.SuccessMessage({ message: "Successfully removed friend." });
        success.render();
        this.currentUser.friends().remove(added_friend);
        this.model.friends().remove(added_friend.id);

      }.bind(this)
    });
  },

  makeRequest: function(event){
    event.preventDefault();
    var requestForm = new SofaHopping.Views.RequestForm({ model: this.model, requestType: "guest" });
    requestForm.render();
  }


});
