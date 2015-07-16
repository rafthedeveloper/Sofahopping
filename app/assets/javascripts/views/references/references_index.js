SofaHopping.Views.ReferencesIndex = Backbone.CompositeView.extend({
  template: JST["references/references_index"],

  events: {
    "click #create_reference": "createReferenceForm"
  },

  render: function(){

    var renderedContent = this.template({
      references: this.collection, visitedUser: this.model, currentUser: SofaHopping.currentUser });
    this.$el.html(renderedContent);

    return this;
  },

  createReferenceForm: function(){

    var referenceForm = new SofaHopping.Views.ReferenceForm ({
      model: this.model
    });
    referenceForm.render();
  }
});
