SofaHopping.Views.ReferenceIndexItem = Backbone.View.extend({
  template: JST["references/references_index_item"],
  tagName: "li",
  className: "reference-list-item",

  events: {
    "click #delete_reference": "destroyReference"
  },

  initialize: function(){
    this.listenTo(this.model, "sync", this.render)
  },

  render: function(){
    this.model.get('referencer_id')
    SofaHopping.currentUser.id

    var renderedContent = this.template({ reference: this.model, currentUser: SofaHopping.currentUser });
    this.$el.html(renderedContent);

    return this;
  },

  destroyReference: function(event){
    event.preventDefault();

    this.model.destroy({
      success: function(model, response){

      },

      error: function(model, response){
        debugger
      }.bind(this)
    })

  }
});