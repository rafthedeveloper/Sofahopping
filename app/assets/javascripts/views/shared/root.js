SofaHopping.Views.RootView = Backbone.View.extend({
  template: JST["shared/root"],
  events:{
    "click #sign-up-root": "renderSignUp",
    "click #sign-in-google-root": "oauthLogin",
    "click #guest-login": "guestLogin"
  },



  render: function(){

    var renderedContent = this.template({});
    this.$el.html(renderedContent);

    return this
  },

  guestLogin: function(event){
    event.preventDefault();
    SofaHopping.currentUser.signIn({ username: "LebronJames", password: "password" })
    Backbone.history.navigate("dashboard", { trigger: true });
  },



  oauthLogin: function(event){
    event.preventDefault();
    window.location = '/auth/google_oauth2';
  },

  renderSignUp: function(event){
    event.preventDefault();
    Backbone.history.navigate("users/new", { trigger: true })
  }
});
