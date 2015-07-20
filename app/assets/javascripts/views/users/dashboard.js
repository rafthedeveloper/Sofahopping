SofaHopping.Views.DashboardView = Backbone.CompositeView.extend({
  tagName: "section",
  className: "dashboard",

  template: JST["users/dashboard"],

  addSideBarView: function(){
    var sideBarView = new SofaHopping.Views.DashboardSidebar({ model: this.model });
    this.addSubview('.dash-sidebar-container', sideBarView)
  },

  addTodoView: function(){
    var todoView = new SofaHopping.Views.DashboardTodo({ model: this.model });
    this.addSubview('.dash-main-container', todoView)
  },

  addTripsView: function(){
    var tripsIndexView = new SofaHopping.Views.TripsIndex({ model: this.model, collection: this.model.trips() });
    this.addSubview('.dash-main-container', tripsIndexView)
  },

  initialize: function(){

    this.listenTo(this.model, "sync change", this.render)
    this.addSideBarView();
    this.addTodoView();
    this.addTripsView();
  },

  render: function(){
    
    var renderedContent = this.template();
    this.$el.html(renderedContent)
    this.attachSubviews();
    return this;
  }
});
