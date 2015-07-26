SofaHopping.Views.MessagesIndexItem = Backbone.View.extend({
  template: JST["messages/index_item"],
  tagName: "li",
  className: "group message-list-item",


  render: function(){
    var renderedContent = this.template({ message: this.model });
    this.$el.html(renderedContent);
$("small.timeago").timeago();
    return this;
  }
});
