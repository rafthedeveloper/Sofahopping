SofaHopping.Views.DashboardView = Backbone.CompositeView.extend({
  tagName: "section",
  className: "dashboard",

  template: JST["users/dashboard"],

  addSideBarView: function(user){
    var sideBarView = new SofaHopping.Views.DashboardSidebar({ model: user });
    this.addSubview('.sidebar_container', sideBarView)
  },

  addTripsView: function(user){
    var tripsIndexView = new SofaHopping.Views.TripsIndex({ model: user });
    this.addSubview('.trips_container', tripsIndexView)
  },

  initialize: function(){
    this.listenTo(this.model, "sync", this.render)
    this.addSideBarView(this.model);
    this.addTripsView(this.model);
  },

  render: function(){

    var renderedContent = this.template();
    this.$el.html(renderedContent)
    this.attachSubviews();
    return this;
  }
});
