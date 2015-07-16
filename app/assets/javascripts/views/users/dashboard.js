// SofaHopping.Views.DashboardView = Backbone.View.extend({
//   template: JST["users/dashboard"],
//   editHostingStatusTemplate: JST["users/edit_hosting_status"],
//
//   events: {
//     "click #edit_hosting_status": "revealHostStatusForm",
//     "submit #hosting_status_form": "updateHostingStatus"
//   },
//
//   initialize: function(){
//     this.listenTo(this.model, "sync", this.render)
//
//   },
//
//   render: function(){
//     var renderedContent = this.template({ user: this.model, trips: this.model.trips() });
//     this.$el.html(renderedContent);
//
//     return this;
//   },
//
//   revealHostStatusForm: function(){
//     this.$("#hosting_status_form").toggleClass("no-display");
//   },
//
//   updateHostingStatus: function(event){
//     event.preventDefault();
//     var attr = $(event.currentTarget).serializeJSON().user;
//     this.model.set(attr)
//     this.model.save({}, {
//       success: function(model, response) {
//         var success = response.message
//       }.bind(this)
//    });
//   }
// });

SofaHopping.Views.DashboardView = Backbone.CompositeView.extend({
  tagName: "section",
  className: "dashboard",

  template: JST["users/dashboard"],

  addSideBarView: function(user){
    var sideBarView = new SofaHopping.Views.DashboardSidebar({ model: user });
    this.addSubview('.sidebar_container', sideBarView)
  },

  addTripsView: function(user){
    var tripsIndexView = new SofaHopping.Views.TripsIndex({ model: user });
    this.addSubview('.trips_container', tripsIndexView)
  },

  initialize: function(){
    this.listenTo(this.model, "sync", this.render)
    this.addSideBarView(this.model);
    this.addTripsView(this.model);
  },

  render: function(){

    var renderedContent = this.template();
    this.$el.html(renderedContent)
    this.attachSubviews();
    return this;
  }
});
