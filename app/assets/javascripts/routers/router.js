SofaHopping.Routers.Router = Backbone.Router.extend({

  routes: {
    "": "userDashboard",
    "people/:id": "userProfile",
    "members/hosts": "findHosts",
    "members/all": "findAllMembers",
    "members/travelers": "findAllTravelers"
  },

  initialize: function(options){
    this.currentUser = options.user;
    this.$rootEl = options.$rootEl;
    $("#search").on("submit", this.memberSearchBar);
  },

  memberSearchBar: function(event){
    event.preventDefault();
    var hosting_status = $(event.currentTarget).find("#hosting_status").val();

    if (hosting_status === "1"){
      Backbone.history.navigate("members/hosts", { trigger: true });
    }
    else if (hosting_status === "2"){
      Backbone.history.navigate("members/all", { trigger: true });
    }
    else if (hosting_status === "3"){
      Backbone.history.navigate("members/travelers", { trigger: true });
    }
  },

  userDashboard: function(){
    var dashboardView = new SofaHopping.Views.DashboardView({
      model: this.currentUser
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

    var membersView = new SofaHopping.Views.MembersView({
      collection: hosts, currentUser: this.currentUser })
    this._swapView(membersView);

  },

  findAllMembers: function(){
    var allMembers = new SofaHopping.Collections.Users();
    allMembers.fetch();

    var membersView = new SofaHopping.Views.MembersView({ collection: allMembers, currentUser: this.currentUser })
    this._swapView(membersView);
  },

  findAllTravelers: function(){
    var allTravelers = new SofaHopping.Collections.Users();
    allTravelers.fetch({ data: { trips : true }});

    var travelersView = new SofaHopping.Views.MembersView({ collection: allTravelers, currentUser: this.currentUser })
    this._swapView(travelersView);
  },


  _swapView: function(view){
    this.currentView && this.currentView.remove();
    this.$rootEl.html(view.render().$el);
    this.currentView = view;
  }
})
