window.SofaHopping = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    this.currentUser = new SofaHopping.Models.CurrentUser();
    this.users = new SofaHopping.Collections.Users({});
    this.header = new SofaHopping.Views.Header({ el: "#header", $rootHero: $("#splash-page") });
    this.currentUser.fetch({
      success: function(){
        new SofaHopping.Routers.Router({
          $rootEl: $("#content"),
          $rootHero: $("#splash-page"),
          users: this.users,
          currentUser: this.currentUser
        });
        Backbone.history.start();
      }.bind(this)
    });
  }
};
