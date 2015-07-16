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

  parse: function(payload){
    if (payload.trips){
      this.trips().set(payload.trips);
      delete payload.trips;
    }

    if (payload.references){
      this.references().set(payload.references);
      delete payload.references
    }

    return payload;
  }
});
