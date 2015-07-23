SofaHopping.Views.RequestsIndexItem = Backbone.View.extend({
	template: JST["requests/requests_index_item"],
	tagName: "li",

	initialize: function(){
		this.listenTo(this.model, "sync", this.render)
	},


	render: function(){

		var renderedContent = this.template({ request: this.model });
		this.$el.html(renderedContent);
		$("small.timeago").timeago();
		return this;
	}
});
