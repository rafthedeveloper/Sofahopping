window.SofaHopping = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {

    this.currentUser = new SofaHopping.Models.CurrentUser();
    this.users = new SofaHopping.Collections.Users({});
    this.header = new SofaHopping.Views.Header({ el: "#header" });
    this.currentUser.fetch({
      success: function(){
        new SofaHopping.Routers.Router({ $rootEl: $("#content") });
        Backbone.history.start();
      }
    });

  }
};
