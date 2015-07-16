window.SofaHopping = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function(userId, flash_messages) {
    this.currentUser = new SofaHopping.Models.User({ id: userId.toString() });
    this.currentUser.fetch();
    var $rootEl = $("#content")
    new SofaHopping.Routers.Router({
      $rootEl: $rootEl, users: new SofaHopping.Collections.Users({})
    });
    Backbone.history.start();
  }
};
