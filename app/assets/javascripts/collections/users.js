SofaHopping.Collections.Users = Backbone.Collection.extend({
  url: "/api/users",
  model: SofaHopping.Models.User,

  getOrFetch: function(id, data) {
      var user = this.get(id),
          users = this;

      if(!user) {
        user = new SofaHopping.Models.User({ id: id });
        user.fetch(data, {
          success: function() {
            users.add(user);
          }
        });
      } else {
        user.fetch(data);
      }

      return user;
    }
});
