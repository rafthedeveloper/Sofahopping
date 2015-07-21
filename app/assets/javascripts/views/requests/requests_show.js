SofaHopping.Views.RequestsShow = Backbone.View.extend({
	template: JST["requests/requests_show"],
	tagName: "article",
	className: "request-details",

	events:{
		"click #cancel-request": "cancelRequest",
		"click #reject-request": "rejectRequest"
	},
	initialize: function(){
		this.listenTo(this.model, "sync", this.render)
	},

	render: function(){

		var renderedContent = this.template({ request: this.model });
		this.$el.html(renderedContent);

		return this;
	},

	cancelRequest: function(){
		this.model.set("status", "cancelled")
		this.model.save({}, {
			success: function(){
			}.bind(this)
		})
	},

	rejectRequest: function(){
		this.model.set("status", "rejected")
		this.model.save({}, {
			success: function(){
			}.bind(this)
		})
	}
})
