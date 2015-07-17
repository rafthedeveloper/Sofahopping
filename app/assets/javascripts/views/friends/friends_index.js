SofaHopping.Views.FriendsIndex = Backbone.CompositeView.extend({
  template: JST["friends/friends_index"],

  // addReferenceView: function(reference){
  //   var referenceView = new SofaHopping.Views.ReferenceIndexItem({ model: reference });
  //   this.addSubview('.references-list', referenceView);
  // },
  //
  // removeReferenceView: function(reference){
  //   this.removeModelSubview('.references-list', reference);
  // },

  initialize: function(){
    // this.listenTo(this.collection, "sync", this.render)
    // this.listenTo(this.collection, "add", this.addReferenceView);
    // this.listenTo(this.collection, "remove", this.removeReferenceView);
    // this.collection.each(this.addReferenceView.bind(this));
  },

  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    // this.attachSubviews();

    return this;
  }
});
