SofaHopping.Views.ProfileMainView = Backbone.CompositeView.extend({
  template: JST["users/profile_main"],
  className: "profile-main",
  tagName: "section",

  addReferencesView: function(){
    var referencesView = new SofaHopping.Views.ReferencesIndex({ model: this.model });
    this.addSubview(".user-profile-references-container", referencesView);
  },

  initialize: function(options){
    this.currentUser = 
    this.listenTo(this.model, "sync", this.render);
    this.addReferencesView(this.model);
  },

  render: function(){
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();

    return this;
  },


});
