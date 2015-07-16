SofaHopping.Views.ReferenceForm = Backbone.View.extend({
  template: JST["references/references_form"],

  events: {
    "click #close_reference_modal": "destroyReferenceForm"
  },

  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    $("body").append(this.$el);

    return this;
  },

  destroyReferenceForm: function(){
    this.remove();
  }
});
