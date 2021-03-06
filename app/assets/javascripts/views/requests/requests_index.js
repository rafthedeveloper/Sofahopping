SofaHopping.Views.RequestsIndex = Backbone.CompositeView.extend({
	template: JST["requests/requests_index"],

	addRequestView: function(request){
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
		$("small.timeago").timeago();

		return this;
	}
});
