SofaHopping.Views.SuccessMessage = Backbone.View.extend({
  template: JST["success/message"],


  initialize: function(options){
    this.message = options.message;
    this.$el = $(".server_responses");
  },

  render: function(){
    var renderedContent = this.template({ message: this.message })
    this.$el.html(renderedContent);
    this.startFadeOut();
    return this;
  },

  startFadeOut: function(){
    window.scrollTo(0, 0);
    this.$el.delay(10000).fadeOut(400, function(){
      this.$el.empty();
      this.$el.css("display", "block");
    }.bind(this))
  }
})
