SofaHopping.Views.ProfileView = Backbone.CompositeView.extend({
  template: JST["users/profile"],

  events:{
    "click #main_about": "addAboutView",
    "click #main_friends": "addFriendsView",
    "click #main_references": "addFriendsView"
  },

  removeMainSubview: function(){
    if (this.mainView){
      this.removeSubview('.profile-main-container', this.mainView)
      this.mainView = null;
    }
  },

  addMainView: function(user){
    this.mainView = new SofaHopping.Views.ProfileMainView({ model: this.model });
    this.addSubview('.profile-main-container', this.mainView);
  },

  addSideBarView: function(user){
    var sideBarView = new SofaHopping.Views.ProfileSidebarView({ model: this.model });
    this.addSubview('.profile-sidebar-container', sideBarView)
  },



  initialize: function(){
    this.listenTo(this.model, "sync", this.render)
    this.addMainView();
    this.addSideBarView();
  },

  render: function(){
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },


});
