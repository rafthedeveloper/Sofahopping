SofaHopping.Views.DashboardView = Backbone.CompositeView.extend({
  className: "dashboard",
  tagName: "main",
  template: JST["dashboard/dashboard_main"],

  initialize: function(){
    this.addSideBarView();
    this.addPendingFriendsView();
    this.addTripsView();
  },

  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();

    return this;
  },

  addSideBarView: function(){
    var sideBarView = new SofaHopping.Views.DashboardSidebar({
      model: this.model
    });

    this.addSubview('.dash-sidebar-container', sideBarView);
  },

  addPendingFriendsView: function(){
    var todoView = new SofaHopping.Views.FriendsIndex({
      model: this.model,
      collection: this.model.pendingFriends(),
      listType: "pending"
    });

    this.addSubview('.dash-main-container', todoView);
  },

  addTripsView: function(){
    var tripsIndexView = new SofaHopping.Views.TripsIndex({
      model: this.model,
      collection: this.model.trips()
    });

    this.addSubview('.dash-main-container', tripsIndexView);
  }
});
