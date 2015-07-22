SofaHopping.Views.DashboardSidebar = Backbone.View.extend({
  template: JST["users/dashboard_sidebar"],
  tagName: "section",
  className: "sidebar",

  events: {
    "click #edit_hosting_status": "revealHostStatusForm",
    "submit #hosting_status_form": "updateHostingStatus",
    "submit #avatar-upload": "uploadAvatar",
    "click #upload-avatar": "updateAvatar"
  },

  initialize: function(){
    this.listenTo(this.model, "sync change", this.render)
  },

  render: function(){

    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);

    return this;
  },

  revealHostStatusForm: function(){
    this.$("#hosting_status_form").toggleClass("no-display");
  },

  updateAvatar: function(){
    debugger
  },

  uploadAvatar(event){
    event.preventDefault();

    var file = this.$("#avatar-image")[0].files[0];

    var formData = new FormData();
    formData.append("user[avatar]", file);

    var that = this;
    this.model.saveFormData(formData, {
      success: function(){
        Backbone.history.navigate("", { trigger: true });
      }
    });
  },

  updateHostingStatus: function(event){

    event.preventDefault();
    var attr = $(event.currentTarget).serializeJSON().user;
    this.model.set(attr)
    this.model.save({}, {
      success: function(model, response) {
        var success = new SofaHopping.Views.SuccessMessage({ message: response.message });
        success.render();
      }.bind(this)
   });
  }
});
