SofaHopping.Views.ReferencesIndex = Backbone.CompositeView.extend({
  template: JST["references/references_index"],

  events: {
    "click #create_reference": "createReferenceForm"
  },

  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
  },

  render: function(){
    var renderedContent = this.template({ references: this.collection });
    this.$el.html(renderedContent);

    return this;
  },

  createReferenceForm: function(){
    var referenceForm = new SofaHopping.Views.ReferenceForm ({ model: this.model });
    referenceForm.render();
  }
});
