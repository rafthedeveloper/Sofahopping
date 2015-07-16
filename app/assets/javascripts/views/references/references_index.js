SofaHopping.Views.ReferencesIndex = Backbone.View.extend({
  template: JST["references/references_index"],

  render: function(){
    var renderedContent = this.template({ references: this.collection });
    this.$el.html(renderedContent);

    return this;
  }
});
