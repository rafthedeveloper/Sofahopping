SofaHopping.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",

  trips: function(){
    if (!this._trips){
      this._trips = new SofaHopping.Collections.Trips([], { user: this });
    }

    return this._trips;
  },

  parse: function(payload){
    if (payload.trips){
      this.trips().set(payload.trips);
    }

    delete payload.trips;
    return payload;
  }
});
