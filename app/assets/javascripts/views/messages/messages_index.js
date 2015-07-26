SofaHopping.Views.MessagesIndex = Backbone.CompositeView.extend({
  template: JST["messages/index"],
  className: "messages",
  tagName: "section",

  addMessageView: function(message){
    var messagesView = new SofaHopping.Views.MessagesIndexItem({ model: message });
    this.addSubview('.messages-list', messagesView, true);
  },

  initialize: function(){
    this.listenTo(this.collection, "sync", this.render)
    this.listenTo(this.collection, "add", this.addMessageView);
    this.listenTo(this.collection, "remove", this.removeMessageView);
    this.collection.each(this.addMessageView.bind(this));
  },

  render: function(){

    var renderedContent = this.template({});
    this.$el.html(renderedContent)
    this.attachSubviews();

    return this;
  }
})
