SofaHopping.Routers.Router = Backbone.Router.extend({

  routes: {
    "": "userDashboard",
    "people/:id": "userProfile",
    "members/hosts": "findHosts",
    "members/all": "findAllMembers",
    "members/travelers": "findAllTravelers"
  },

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    $("#search").on("submit", this.memberSearchBar);
    this.users = options.users;
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
    var dashboardView = new SofaHopping.Views.DashboardView({ model: SofaHopping.currentUser });

    this._swapView(dashboardView);
  },

  userProfile: function(id){
    var visitedUser = this.users.getOrFetch(id);

    var userProfileView = new SofaHopping.Views.ProfileView({
      model: visitedUser });

    this._swapView(userProfileView);
  },

  findHosts: function(){
    var hosts = new SofaHopping.Collections.Users();
    hosts.fetch({ data: { status: "Accepting Guests" }});

    var membersView = new SofaHopping.Views.MembersView({
      collection: hosts, searchType: "hosts" })
    this._swapView(membersView);

  },

  findAllMembers: function(){
    var allMembers = new SofaHopping.Collections.Users();
    allMembers.fetch();

    var membersView = new SofaHopping.Views.MembersView({
      collection: allMembers, searchType: "all" })
    this._swapView(membersView);
  },

  findAllTravelers: function(){
    var allTravelers = new SofaHopping.Collections.Users();
    allTravelers.fetch({ data: { trips : true }});

    var travelersView = new SofaHopping.Views.MembersView({
      collection: allTravelers, searchType: "travelers" })
    this._swapView(travelersView);
  },




  _swapView: function(view){
    this.currentView && this.currentView.remove();

    this.$rootEl.html(view.render().$el);
    this.$rootEl.prepend("<section class=\"server_responses\"></section>");
    this.currentView = view;
  }
})
