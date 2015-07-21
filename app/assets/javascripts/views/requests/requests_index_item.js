SofaHopping.Views.RequestsIndexItem = Backbone.View.extend({
	template: JST["requests/requests_index_item"],

	render: function(){
		var renderedContent = this.template({ request: this.model });
		this.$el.html(renderedContent);

		return this;
	}
});
