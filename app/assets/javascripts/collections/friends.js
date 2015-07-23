SofaHopping.Collections.Friends = Backbone.Collection.extend({
  url: "/api/friendships",
  model: SofaHopping.Models.Friend,

  comparator: function(friend){
    return -friend.get('fname');
  }
});
