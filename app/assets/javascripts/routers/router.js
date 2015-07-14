SofaHopping.Routers.Router = Backbone.Router.extend({

  routes: {
    "dashboard": "userDashboard",
    "people/:id": "userProfile",
    "members/hosts": "findHosts"
  },

  initialize: function(options){
    this.current_user = options.user;
    this.$rootEl = options.$rootEl;
  },

  userDashboard: function(){
    var dashboardView = new SofaHopping.Views.DashboardView({
      model: this.current_user
    });

    this._swapView(dashboardView);
  },

  userProfile: function(id){
    var visitedUser = new SofaHopping.Models.User({ id: id });
    debugger
    visitedUser.fetch();

    var userProfileView = new SofaHopping.Views.ProfileView({
      model: visitedUser
    });

    this._swapView(userProfileView);
  },

  findHosts: function(){

    var hosts = new SofaHopping.Collections.Users();

    var membersView = new SofaHopping.Views.MembersView({
    collection: hosts
    })
    
    this._swapView(hosts);

  },

  _swapView: function(view){
    this.currentView && this.currentView.remove();
    this.$rootEl.html(view.render().$el);
    this.currentView = view;
  }
})
