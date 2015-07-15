SofaHopping.Views.ErrorDetails = Backbone.View.extend({
  template: JST["errors/error_details"],

  initialize: function(options){
    this.errors = options.errors;
  },

  render: function(){
    var renderedContent = this.template({ errors: this.errors });
    this.$el.html(renderedContent);

    return this;
  }
});
