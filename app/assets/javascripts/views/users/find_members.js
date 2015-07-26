SofaHopping.Views.MembersView = Backbone.View.extend({
  template: JST["users/members"],

  events: {
    "click #create_trip": "addTripForm"
  },

  initialize: function(options){
    this.listenTo(this.collection, "sync", this.render);
    this.collection.pageNum = 1;
    this.searchType = options.searchType;
    // this.bindScroll();
    // this.query = options.query
  },

  render: function(){
    var renderedContent = this.template({ members: this.collection,
                                          searchType: this.searchType,
                                          });
    this.$el.html(renderedContent);
    $("small.timeago").timeago();

    return this;
  },

  addTripForm: function(event){
    event.preventDefault();
    var newTrip = new SofaHopping.Models.Trip({});
    var tripForm = new SofaHopping.Views.TripForm({ model: newTrip, currentUser: SofaHopping.currentUser });
    tripForm.render();
  }

  // bindScroll: function () {
	// 	$(window).on("scroll", this.handleScroll.bind(this));
	// },
  //
	// handleScroll: function (event) {
	// 	var $doc = $(document);
	// 	var scrolledDist = $doc.height() - window.innerHeight - $doc.scrollTop();
  //
	// 	if (scrolledDist < 300) {
	// 		this.nextPageInfiniteScroll();
	// 	}
	// },
  //
  // nextPageInfiniteScroll: function () {
  //
	// 	if (this.requestingNextPage) return;
  //
	// 	this.requestingNextPage = true;
	// 	this.collection.fetch({
	// 		remove: false,
	// 		data: {
	// 			query: this.query,
	// 			page: this.collection.pageNum + 1
	// 		},
	// 		success: function (response) {
  //
	// 			this.requestingNextPage = false;
	// 			this.collection.pageNum++;
	// 		}.bind(this)
	// 	});
	// }

})
