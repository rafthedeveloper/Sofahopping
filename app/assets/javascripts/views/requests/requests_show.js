SofaHopping.Views.RequestsShow = Backbone.View.extend({
	template: JST["requests/requests_show"],
	tagName: "article",
	className: "request-details",

	events:{
		"click #cancel-request": "handleRequest",
		"click #reject-request": "handleRequest",
		"click #accept-request": "handleRequest",
		"click .back-to-index": "backToIndex"
	},

	initialize: function(){
		this.listenTo(this.model, "sync", this.render)
	},

	render: function(){
		var renderedContent = this.template({ request: this.model });
		this.$el.html(renderedContent);
		$("small.timeago").timeago();
		return this;
	},

	backToIndex:function(){
		Backbone.history.navigate("#requests", { trigger: true });
	},

	handleRequest: function(event){
		event.preventDefault();
		var newStatus = $(event.currentTarget).val();
		this.model.set("status", newStatus)
		this.model.save({}, {
			success: function(){
			}.bind(this)
		})
	}
})
