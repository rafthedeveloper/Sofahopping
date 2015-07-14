window.SofaHopping = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(user_id) {
    var user = new SofaHopping.Models.User({ id: user_id });
    user.fetch();

    new SofaHopping.Routers.Router({
      user: user
    });
    Backbone.history.start();
  }
};
