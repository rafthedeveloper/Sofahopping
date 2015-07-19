SofaHopping.Views.DashboardSidebar = Backbone.View.extend({
  template: JST["users/dashboard_sidebar"],
  tagName: "section",
  className: "sidebar",

  events: {
    "click #edit_hosting_status": "revealHostStatusForm",
    "submit #hosting_status_form": "updateHostingStatus"
  },

  initialize: function(){
    this.listenTo(this.model, "sync", this.render)
  },

  render: function(){

    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);

    return this;
  },

  revealHostStatusForm: function(){
    this.$("#hosting_status_form").toggleClass("no-display");
  },

  updateHostingStatus: function(event){

    event.preventDefault();
    var attr = $(event.currentTarget).serializeJSON().user;
    this.model.set(attr)
    this.model.save({}, {
      success: function(model, response) {

      }.bind(this)
   });
  }
});
