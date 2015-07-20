SofaHopping.Views.ProfileMainView = Backbone.CompositeView.extend({
  template: JST["users/profile_main"],
  className: "profile-main",
  tagName: "section",

  events: {
    "click #add_friend": "createFriend",
    "click #remove_friend": "removeFriend"

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

    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.currentUser, "sync", this.render);
    this.listenTo(SofaHopping.currentUser.pendingFriends(), "add remove", this.render);
    this.listenTo(SofaHopping.currentUser.friends(), "add remove", this.render);
    this.addReferencesView(this.model);
    this.addFriendshipsView(this.model);
  },

  render: function(){
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();

    return this;
  },

  createFriend: function(){
    var newFriend = new SofaHopping.Models.Friend({});
    newFriend.set("requestee_id", this.model.id);

    newFriend.save({}, {
      success: function(){
        SofaHopping.currentUser.pendingFriends().add(newFriend);
      }.bind(this)
    })
  },

  removeFriend: function(){
    var added_friend = SofaHopping.currentUser.find_added_friend(this.model.id)
    added_friend.destroy({
      success: function(){
        SofaHopping.currentUser.friends().remove(added_friend);
      }
    });
  }


});
