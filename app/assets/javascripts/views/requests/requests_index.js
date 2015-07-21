SofaHopping.Views.RequestsIndex = Backbone.CompositeView.extend({
	template: JST["requests/requests_index"],

	addRequestView(request){
		var requestView = new SofaHopping.Views.RequestsIndexItem({ model: request });
		this.addSubview('.requests-list', requestView);
	},

	initialize: function(){
		this.listenTo(this.collection, "sync", this.render);
		this.listenTo(this.collection, "add", this.addRequestView);
		this.collection.each(this.addRequestView.bind(this));
	},

	render: function(){

		var renderedContent = this.template({});
		this.$el.html(renderedContent);
		this.attachSubviews();

		return this;
	}
});
