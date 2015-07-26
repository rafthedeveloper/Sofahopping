SofaHopping.Views.ReferenceIndexItem = Backbone.View.extend({
  template: JST["references/references_index_item"],
  tagName: "li",
  className: "reference-list-item group",

  events: {
    "click #delete_reference": "destroyReference"
  },

  initialize: function(){

    this.listenTo(this.model, "sync", this.render)
  },

  render: function(){
    var renderedContent = this.template({ reference: this.model, currentUser: SofaHopping.currentUser });
    this.$el.html(renderedContent);

    return this;
  },

  destroyReference: function(event){
    event.preventDefault();

    this.model.destroy({
      success: function(model, response){
        var success = new SofaHopping.Views.SuccessMessage({ message: "Successfully deleted reference." });
        success.render();
      }
    })

  }
});
