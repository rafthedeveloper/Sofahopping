SofaHopping.Collections.Requests = Backbone.Collection.extend({
  url: "/api/requests",
  model: SofaHopping.Models.Request,
  tagName: "section",
  className: "requests",

  getOrFetch: function(id) {
      var request = this.get(id),
          requests = this;

      if(!request) {
        request = new SofaHopping.Models.Request({ id: id });
        request.fetch({
          success: function() {
            requests.add(request);
          }
        });
      } else {
        request.fetch();
      }

      return request;
    }
});
