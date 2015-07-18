SofaHopping.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",

  trips: function(){
    if (!this._trips){
      this._trips = new SofaHopping.Collections.Trips([], { user: this });
    }

    return this._trips;
  },

  references: function(){
    if (!this._references){
      this._references = new SofaHopping.Collections.References([], { user: this });
    }

    return this._references
  },

  friends: function(){
    if (!this._friends){
      this._friends = new SofaHopping.Collections.Friends([], { user: this });
    }

    return this._friends
  },

  pendingFriends: function(){
    if (!this._pendingFriends){
      this._pendingFriends = new SofaHopping.Collections.Friends([], { user: this });
    }

    return this._pendingFriends
  },

  parse: function(payload){
    if (payload.trips){
      this.trips().set(payload.trips);
      delete payload.trips;
    }

    if (payload.references){
      this.references().set(payload.references);
      delete payload.references
    }

    if (payload.friends){
      this.friends().set(payload.friends)
      delete payload.friends
    }

    if (payload.pending_friends){
      this.pendingFriends().set(payload.pending_friends)
      delete payload.pending_friends
    }

    return payload;
  }
});


SofaHopping.Models.CurrentUser = SofaHopping.Models.User.extend({

  url: "/api/session",

  initialize: function(options){
    this.listenTo(this, "change", this.fireSessionEvent);
  },

  isSignedIn: function() {
    return !this.isNew();
  },

  signIn: function(options){
    var model = this;
    var credentials = {
      "user[username]": options.username,
      "user[password]": options.password
    };

    $.ajax({
      url: this.url,
      type: "POST",
      data: credentials,
      dataType: "json",
      success: function(data){
        model.set(data);
        options.success && options.success();
      },
      error: function(){
        options.error && options.error();
      }
    });
  },

  signOut: function(options){
    var model = this;

    $.ajax({
      url: this.url,
      type: "DELETE",
      dataType: "json",
      success: function(data){
        model.clear();
        options.success && options.success();
      }
    });
  },

  fireSessionEvent: function(){
  if(this.isSignedIn()){
    this.trigger("signIn");
    console.log("currentUser is signed in!", this);
  } else {
    this.trigger("signOut");
    console.log("currentUser is signed out!", this);
  }
}

});
