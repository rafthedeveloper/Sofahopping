SofaHopping.Views.DashboardSidebar = Backbone.View.extend({
  className: "sidebar",
  tagName: "section",
  template: JST["dashboard/dashboard_sidebar"],

  events: {
    "click #upload-avatar": "createAvatarUploadForm",
    "submit #hosting_status_form": "updateHostingStatus",
    "submit #avatar-upload": "uploadAvatar"
  },

  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
  },

  render: function(){
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);

    return this;
  },

  createAvatarUploadForm: function(){
    var avatarForm = new SofaHopping.Views.AvatarForm({ model: this.model });
  },

  updateHostingStatus: function(event){
    event.preventDefault();
    var attr = $(event.currentTarget).serializeJSON().user;
    this.model.set(attr);
    this.model.save({}, {
      success: function(model, response) {
        var success = new SofaHopping.Views.SuccessMessage({ message: response.message });
        success.render();
      }.bind(this)
   });
  }
});
