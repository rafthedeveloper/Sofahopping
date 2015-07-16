window.SofaHopping = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(userId, flash_messages) {
    this.currentUser = new SofaHopping.Models.User({ id: userId });
    this.currentUser.fetch();
    // var user = new SofaHopping.Models.User({ id: userId });
        // user.fetch();
    var $rootEl = $("#content")


    new SofaHopping.Routers.Router({
      $rootEl: $rootEl
    });
    Backbone.history.start();

  }
};
