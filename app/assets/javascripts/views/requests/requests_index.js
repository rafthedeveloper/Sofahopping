SofaHopping.Views.RequestsIndex = Backbone.CompositeView.extend({
	template: JST["requests/requests_index"],

	addRequestView(request){
		var requestView = new SofaHopping.Views.RequestsIndexItem({ model: request });
		this.addSubview('.requests-list', requestView);
		this.$(".requests-list").removeClass("none");
	},

	initialize: function(){
		this.listenTo(this.collection, "sync", this.render);
		
	},

	render: function(){

		var renderedContent = this.template({});
		this.$el.html(renderedContent);
		this.collection.each(this.addRequestView.bind(this));
		if (this.collection.length === 0) { this.$(".requests-list").addClass("none") }
		$("small.timeago").timeago();
		return this;
	}
});
