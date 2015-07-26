SofaHopping.Models.Request = Backbone.Model.extend({
  urlRoot: "/api/requests",

  messages: function(){
    if (!this._messages){
      this._messages = new SofaHopping.Collections.Messages([], { request: this });
    }

    return this._messages;
  },

  parse: function(payload){
    if (payload.messages){
      this.messages().set(payload.messages);
      delete payload.messages;
    }

    return payload;
  }
});
