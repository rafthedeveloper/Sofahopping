SofaHopping.Views.DashboardView = Backbone.CompositeView.extend({
  tagName: "section",
  className: "dashboard",

  template: JST["users/dashboard"],

  addSideBarView: function(){
    var sideBarView = new SofaHopping.Views.DashboardSidebar({ model: this.model });
    this.addSubview('.sidebar_container', sideBarView)
  },

  addTripsView: function(){
    var tripsIndexView = new SofaHopping.Views.TripsIndex({ model: this.model, collection: this.model.trips() });
    this.addSubview('.trips_container', tripsIndexView)
  },

  initialize: function(){
    this.listenTo(this.model, "sync", this.render)
    this.addSideBarView();
    this.addTripsView();
  },

  render: function(){

    var renderedContent = this.template();
    this.$el.html(renderedContent)
    this.attachSubviews();
    return this;
  }
});
