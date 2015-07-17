SofaHopping.Views.ProfileView = Backbone.CompositeView.extend({
  template: JST["users/profile"],

  // events:{
  //   "click #main_about": "addAboutView",
  //   "click #main_friends": "addFriendsView",
  //   "click #main_references": "addFriendsView"
  // },

  addAboutView: function(){

  },

  addSideBarView: function(user){
    var sideBarView = new SofaHopping.Views.ProfileSidebarView({ model: user });
    this.addSubview('.profile-sidebar-container', sideBarView)
  },

  addMainView: function(user){
    this.mainView = new SofaHopping.Views.ProfileMainView({ model: user });
    this.addSubview('.profile-main-container', this.mainView);
  },

  initialize: function(){
    this.listenTo(this.model, "sync", this.render)
    this.addSideBarView(this.model);
    this.addMainView(this.model);
  },

  render: function(){
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },


});
