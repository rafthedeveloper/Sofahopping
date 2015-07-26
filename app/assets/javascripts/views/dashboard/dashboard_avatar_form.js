SofaHopping.Views.AvatarForm = Backbone.View.extend({
  template: JST["dashboard/dashboard_avatar_form"],

  events: {
    "click #close-avatar-form": "destroyForm",
    "click #close_avatar_modal": "destroyForm",
    "submit #avatar-upload": "uploadAvatar",
    "change #avatar-image": "fileInputChange"
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    var renderedContent = this.template({});
    this.$el.html(renderedContent);
    $("body").append(this.$el);
    return this;
  },

  destroyForm: function(event){
    event && event.preventDefault();
    this.remove();
  },

  uploadAvatar: function(event){
    event.preventDefault();

    var file = this.$("#avatar-image")[0].files[0];

    var formData = new FormData();
    formData.append("user[avatar]", file);

    var that = this;
    this.model.saveFormData(formData, {
      success: function(){
        SofaHopping.currentUser.fetch({});
        that.model.fetch({ data: { view: "dashboard"}});
        that.destroyForm();
      }
    });
  },

  fileInputChange: function(event){


    var that = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function(){
      that._updatePreview(reader.result);
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      that._updatePreview("");
    }
  },

  _updatePreview: function(src){
    this.$el.find("#preview-post-image").attr("src", src);
  }
})
