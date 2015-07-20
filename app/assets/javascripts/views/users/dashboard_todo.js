SofaHopping.Views.DashboardTodo = Backbone.CompositeView.extend({
  template: JST["users/dashboard_todo"],
  tagName: "section",
  className: "dash-main-content",

  addPendingFriendsView: function(){
    var pendingFriendsView = new SofaHopping.Views.FriendsIndex({
      model: this.model, collection: this.model.pendingFriends(), listType: "pending"
    });
    this.addSubview('.pending-requests', pendingFriendsView);
  },

  initialize: function(){
    this.addPendingFriendsView();
  },

  render: function(){
    var renderedContent = this.template({});
    this.$el.html(renderedContent);
    this.attachSubviews();


    return this;
  }
})
