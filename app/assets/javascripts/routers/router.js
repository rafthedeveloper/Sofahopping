SofaHopping.Routers.Router = Backbone.Router.extend({

  routes: {
    "dashboard": "renderDashboard"
  },

  initialize: function(options){
    this.current_user = options.user;
    this.$rootEl = options.$rootEl;
  },

  renderDashboard: function(){
    var dashboardView = new SofaHopping.Views.DashboardView({
      model: this.current_user
    });

    this._swapView(dashboardView);
  },

  _swapView: function(view){
    this.currentView && this.currentView.remove();
    this.$rootEl.html(view.render().$el);
    this.currentView = view;
  }
})
