SofaHopping.Views.Header = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(SofaHopping.currentUser, "signIn signOut", this.render);
    this.render();
  },

  events: {
    "click #sign-out-link": "signOut",
    "submit #search": "redirectToSearch",
    "click #dash-link": "goToDash",
    "click #profile-link": "goToProfile",
    "click #requests-link": "goToRequests"
  },

  template: JST['shared/header'],

  render: function(){
    var html = this.template({ currentUser: SofaHopping.currentUser });
    this.$el.html(html);

    return this;
  },



  goToDash: function(event){
    Backbone.history.navigate("#dashboard", { trigger: true });
  },

  goToRequests: function(event){
    Backbone.history.navigate("#requests", { trigger: true });
  },

  goToProfile: function(){
    Backbone.history.navigate("#people/"+ SofaHopping.currentUser.id, { trigger: true });
  },

  redirectToSearch: function(event){
    event.preventDefault();
    var query = $(event.currentTarget).find(".query").val().toLowerCase();
    $(".query").val('');

    query = query || "none";
    Backbone.history.navigate("#members/search/" + query , { trigger: true })
  },

  signOut: function(event){
    event.preventDefault();
    SofaHopping.currentUser.signOut({
      success: function(){
        Backbone.history.navigate("#", { trigger: true });
      }
    });
  }
});
