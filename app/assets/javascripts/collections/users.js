SofaHopping.Collections.Users = Backbone.Collection.extend({
  url: "/api/users",

  getOrFetch: function(id){
    var users = this;
    var user;

    if (user = users.get(id)){
      user.fetch();
    }
    else {
      user = new SofaHopping.Models.User({ id: id });
      user.fetch({
        success: function(){
          users.remove(user)
          users.add(user)
        }
      })
    }

    return user;
  }
});
