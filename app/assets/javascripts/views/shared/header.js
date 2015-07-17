SofaHopping.Views.Header = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(SofaHopping.currentUser, "signIn signOut", this.render);
    this.render();
  },

  events: {
    "click #sign-out-link": "signOut",
    "submit #search": "redirectToSearch"
  },

  template: JST['shared/header'],

  render: function(){
    var html = this.template({ currentUser: SofaHopping.currentUser });
    this.$el.html(html);

    return this;
  },

  redirectToSearch: function(event){
    event.preventDefault();
    Backbone.history.navigate("members/search", { trigger: true })
  },

  signOut: function(event){
    event.preventDefault();
    SofaHopping.currentUser.signOut({
      success: function(){
        Backbone.history.navigate("session/new", { trigger: true });
      }
    });
  }

});
