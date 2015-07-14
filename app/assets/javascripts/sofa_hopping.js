window.SofaHopping = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(userId) {
    var user = new SofaHopping.Models.User({ id: userId });
    var $rootEl = $("#main")
    user.fetch();

    new SofaHopping.Routers.Router({
      user: user, $rootEl: $rootEl
    });
    Backbone.history.start();

  }
};
