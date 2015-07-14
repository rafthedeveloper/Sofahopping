window.SofaHopping = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(user_id) {
    var user = new SofaHopping.Models.User({ id: user_id });
    var $rootEl = $("#main")
    user.fetch();

    new SofaHopping.Routers.Router({
      user: user, $rootEl: $rootEl
    });
    Backbone.history.start();
    Backbone.history.navigate("dashboard", { trigger: true })
  }
};
