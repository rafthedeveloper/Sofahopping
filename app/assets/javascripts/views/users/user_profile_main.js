SofaHopping.Views.ProfileMainView = Backbone.CompositeView.extend({
  template: JST["users/profile_main"],
  className: "profile-main",
  tagName: "section",

  events: {
    "click #add_friend": "createFriend"
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
    debugger
  }


});
