SofaHopping.Views.SignIn = Backbone.View.extend({

  initialize: function(options){
    this.callback = options.callback;
    this.listenTo(SofaHopping.currentUser, "signIn", this.signInCallback);
  },

  events: {
    "submit #login_form": "submit",
    "click #close_login_modal": "destroyLoginForm"
  },

  template: JST['users/sign_in'],

  render: function(){
    this.$el.html(this.template());

    return this;
  },

  destroyLoginForm: function(){
    debugger
    this.remove();
    Backbone.history.navigate("", { trigger: true });
  },

  submit: function(event){

    event.preventDefault();
    var $form = $(event.currentTarget);
    var formData = $form.serializeJSON().user;

    SofaHopping.currentUser.signIn({
      username: formData.username,
      password: formData.password,
      success: function(){
        this.remove();
      }.bind(this),
      error: function(){
        alert("Wrong username/password combination. Please try again.");
      }
    });
  },

  signInCallback: function(event){
    if(this.callback) {
      this.callback();
    } else {
      Backbone.history.navigate("", { trigger: true });
    }
  }

});
