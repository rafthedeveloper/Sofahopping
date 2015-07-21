SofaHopping.Views.RequestsShow = Backbone.View.extend({
	template: JST["requests/requests_show"],

	initialize: function(){
		this.listenTo(this.model, "sync", this.render)
	},

	render: function(){

		var renderedContent = this.template({ request: this.model });
		this.$el.html(renderedContent);

		return this;
	}
})
