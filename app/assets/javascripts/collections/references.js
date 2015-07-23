SofaHopping.Collections.References = Backbone.Collection.extend({
  url: "/api/references",
  model: SofaHopping.Models.Reference,

  comparator: function(reference){
   return -reference.get('id');
  },
});
