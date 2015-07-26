SofaHopping.Views.Overview = Backbone.View.extend({
  template: JST["users/overview"],
  className: "user-profle-overview user-main-content",
  tagName: "section",

  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.references(), "add remove", this.render);
    this.listenTo(this.model.friends(), "add remove", this.render);
  },

  render: function(){
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);

    return this;
  }
})
