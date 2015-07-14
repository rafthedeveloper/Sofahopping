SofaHopping.Routers.Router = Backbone.Router.extend({

  routes: {
    "": "userDashboard",
    "people/:id": "userProfile",
    "members/hosts": "findHosts",
    "members/all": "findAllMembers"
  },

  initialize: function(options){
    this.current_user = options.user;
    this.$rootEl = options.$rootEl;
  },

  userDashboard: function(){
    Backbone.history.navigate("dashboard");
    var dashboardView = new SofaHopping.Views.DashboardView({
      model: this.current_user
    });

    this._swapView(dashboardView);
  },

  userProfile: function(id){
    var visitedUser = new SofaHopping.Models.User({ id: id });
    visitedUser.fetch();

    var userProfileView = new SofaHopping.Views.ProfileView({
      model: visitedUser
    });

    this._swapView(userProfileView);
  },

  findHosts: function(){
    var hosts = new SofaHopping.Collections.Users();
    hosts.fetch({ data: { status: "accepting" }});

    var membersView = new SofaHopping.Views.MembersView({ collection: hosts })
    this._swapView(membersView);

  },

  findAllMembers: function(){
    var allMembers = new SofaHopping.Collections.Users();
    allMembers.fetch();

    var membersView = new SofaHopping.Views.MembersView({ collection: allMembers })
    this._swapView(membersView);
  },

  _swapView: function(view){
    this.currentView && this.currentView.remove();
    this.$rootEl.html(view.render().$el);
    this.currentView = view;
  }
})
