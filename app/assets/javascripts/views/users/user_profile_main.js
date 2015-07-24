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
      model: this.model, collection: this.model.references()
    });
    this.addSubview(".user-profile-references-container", referencesView);
  },

  addFriendshipsView: function(){
    var friendshipsView = new SofaHopping.Views.FriendsIndex({
      model: this.model, collection: this.model.friends()
    });
    this.addSubview(".user-profile-friends-container", friendshipsView);
  },

  initialize: function(){
    this.listenTo(this.model, "sync change", this.render);
    this.listenTo(SofaHopping.currentUser, "sync", this.render);
    this.listenTo(SofaHopping.currentUser.pendingFriends(), "sync add remove", this.render);
    this.listenTo(SofaHopping.currentUser.friends(), "sync add remove", this.render);
    this.addReferencesView(this.model);
    this.addFriendshipsView(this.model);
  },

  render: function(){

    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();

    return this;
  },

  createFriend: function(event){
    event.preventDefault();
    var newFriend = new SofaHopping.Models.Friend({});
    newFriend.set("requestee_id", this.model.id);

    newFriend.save({}, {
      success: function(){
        var success = new SofaHopping.Views.SuccessMessage({ message: "Successfully sent friend request." });
        success.render();
        SofaHopping.currentUser.pendingFriends().add(newFriend);
      }.bind(this)
    })
  },

  removeFriend: function(event){
    event.preventDefault();
    var added_friend = SofaHopping.currentUser.find_added_friend(this.model.id)
    added_friend.destroy({
      success: function(){
        var success = new SofaHopping.Views.SuccessMessage({ message: "Successfully removed friend." });
        success.render();
        this.model.friends().remove(added_friend);
        SofaHopping.currentUser.friends().remove(added_friend);
      }.bind(this)
    });
  },

  makeRequest: function(event){
    event.preventDefault();
    var requestForm = new SofaHopping.Views.RequestForm({ model: this.model, requestType: "guest" });
    requestForm.render();
  }


});
