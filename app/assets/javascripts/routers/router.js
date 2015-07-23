SofaHopping.Routers.Router = Backbone.Router.extend({

  routes: {
    "": "root",
    "dashboard": "userDashboard",
    "users/new": "new",
    "session/new": "signIn",
    "people/:id": "userProfile",
    "members/search/:query": "memberSearchBar",
    "members/hosts/:query": "findHosts",
    "members/all/:query": "findAllMembers",
    "members/travelers/:query": "findAllTravelers",
    "requests": "requestsIndex",
    "requests/:id": "requestsShow",
    "404": "noPageFound"
  },

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.$rootHero = options.$rootHero
    this.requests = new SofaHopping.Collections.Requests({});
  },

  root: function(){

    var callback = function(){ Backbone.history.navigate("#dashboard", { trigger: true })};
        if (!this._requireSignedOut(callback)) { return; }

    var rootView = new SofaHopping.Views.RootView({});
    this._swapView(rootView, this.$rootHero);
  },

  new: function(){


    if (!this._requireSignedOut()) {
      return; }

    var newUser = new SofaHopping.Models.User({});
    var formView = new SofaHopping.Views.UsersForm({
      model: newUser
    });
    this._swapView(formView, this.$rootHero);

  },

  signIn: function(callback){

    if (!this._requireSignedOut(callback)) { return; }

    var signInView = new SofaHopping.Views.SignIn({
      callback: callback
    });
    this._swapView(signInView, this.$rootHero);
  },

  requestsIndex: function(){
    var callback = this.requestsIndex.bind(this);

    if (!this._requireSignedIn(callback)) { return; }

    this.requests.fetch();

    var requestsIndex = new SofaHopping.Views.RequestsIndex({
      collection: this.requests
    });

    this._swapView(requestsIndex);
  },

  requestsShow: function(id){
    var callback = this.requestsShow.bind(this);

    if (!this._requireSignedIn(callback)) {  return ; }

    var request = this.requests.getOrFetch(id);
    var requestsShow = new SofaHopping.Views.RequestsShow({
      model: request
    });

    this._swapView(requestsShow);
  },

  memberSearchBar: function(query){

    var hosting_status = $(event.currentTarget).find("#hosting_status").val();

    if (hosting_status === "1"){
      Backbone.history.navigate("members/hosts/" + query, { trigger: true });
    }
    else if (hosting_status === "2"){
      Backbone.history.navigate("members/all/" + query, { trigger: true });
    }
    else if (hosting_status === "3"){
      Backbone.history.navigate("members/travelers/" + query, { trigger: true });
    }
  },

  userDashboard: function(){

    var callback = this.userDashboard.bind(this);

    if (!this._requireSignedIn(callback)) { return; }

    var user = SofaHopping.users.getOrFetch(SofaHopping.currentUser.id, { data: { view: "dashboard" }});
    var dashboardView = new SofaHopping.Views.DashboardView({ model: user });

    this._swapView(dashboardView);
  },

  userProfile: function(id){
    var callback = this.userProfile.bind(this, id);
    if (!this._requireSignedIn(callback)) { return; }

    var visitedUser = SofaHopping.users.getOrFetch(id, { data: { view: "profile"} });

    var userProfileView = new SofaHopping.Views.ProfileView({
      model: visitedUser });

    this._swapView(userProfileView);
  },

  findHosts: function(query){
    $($("#hosting_status").children()[0]).attr('selected', 'selected')
    var callback = this.findHosts.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var hosts = new SofaHopping.Collections.Users();
    hosts.fetch({ data: { status: "yes", query: query }});

    var membersView = new SofaHopping.Views.MembersView({
      collection: hosts, searchType: "hosts" })
    this._swapView(membersView);


  },

  findAllMembers: function(query){
    $($("#hosting_status").children()[1]).attr('selected', 'selected')
    var callback = this.findAllMembers.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var allMembers = new SofaHopping.Collections.Users();
    allMembers.fetch({ data: { query: query }});

    var membersView = new SofaHopping.Views.MembersView({
      collection: allMembers, searchType: "all" })
    this._swapView(membersView);

  },

  findAllTravelers: function(query){
    $($("#hosting_status").children()[2]).attr('selected', 'selected')
    var callback = this.findAllTravelers.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var allTravelers = new SofaHopping.Collections.Users();
    allTravelers.fetch({ data: { trips : true, query: query }});

    var travelersView = new SofaHopping.Views.MembersView({
      collection: allTravelers, searchType: "travelers" })
    this._swapView(travelersView);
  },



  _requireSignedIn: function(callback){

    if (!SofaHopping.currentUser.isSignedIn()) {
      callback = callback || this._goHome;
      this.signIn(callback);
      return false;
    }

    return true;
  },

  _requireSignedOut: function(callback){
    if (SofaHopping.currentUser.isSignedIn()) {
      callback = callback || this._goHome;
      callback();
      return false;
    }

    return true;
  },

  _goHome: function(){
      Backbone.history.navigate("#", { trigger: true });
    },

  _swapView: function(view, el){
    this.currentView && this.currentView.remove();
    if (el){
      el.html(view.render().$el);
      this.currentView = view;
      return;
    }
    this.$rootEl.html(view.render().$el);
    this.$rootEl.prepend("<section class=\"server_responses group\"></section>");
    this.currentView = view;
  }
})
