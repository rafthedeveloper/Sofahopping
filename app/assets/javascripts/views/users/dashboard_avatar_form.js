SofaHopping.Views.AvatarForm = Backbone.View.extend({
  template: JST["users/dashboard_upload_avatar"],

  events: {
    "click #close-avatar-form": "destroyForm",
    "click #close_avatar_modal": "destroyForm",
    "submit #avatar-upload": "uploadAvatar",
    "change #avatar-image": "fileInputChange"
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

  uploadAvatar(event){
    event.preventDefault();

    var file = this.$("#avatar-image")[0].files[0];

    var formData = new FormData();
    formData.append("user[avatar]", file);

    var that = this;
    this.model.saveFormData(formData, {
      success: function(){
        Backbone.history.navigate("", { trigger: true });
        that.destroyForm();
      }
    });
  },

  fileInputChange: function(event){

    console.log(event.currentTarget.files[0]);

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
