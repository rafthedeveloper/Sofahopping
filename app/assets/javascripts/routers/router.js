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
    $("form").on("submit", this.memberSearchBar);
  },

  memberSearchBar: function(){
    event.preventDefault();
    var hosting_status = $(event.currentTarget).find("#hosting_status").val();

    if (hosting_status === "1"){
      Backbone.history.navigate("members/hosts", { trigger: true });
    }
    else if (hosting_status === "2"){
      Backbone.history.navigate("members/all", { trigger: true });
    }
  },

  userDashboard: function(){


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
    hosts.fetch({ data: { status: "ACCEPTING GUESTS" }});

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
