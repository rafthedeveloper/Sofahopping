SofaHopping.Views.RequestsShow = Backbone.CompositeView.extend({
	template: JST["requests/requests_show"],
	tagName: "article",
	className: "request-details",

	events:{
		"click #cancel-request": "handleRequest",
		"click #reject-request": "handleRequest",
		"click #accept-request": "handleRequest",
		"click .back-to-index": "backToIndex",
		"submit #request-message-form": "submitMessage"
	},

	initialize: function(){
		this.listenTo(this.model, "sync", this.render);
		this.addMessagesView();
	},

	addMessagesView: function(messages){
		var messagesView = new SofaHopping.Views.MessagesIndex({
			collection: this.model.messages(),
			model: this.model
		});
		this.addSubview('.messages-container', messagesView);
	},

	render: function(){

		var renderedContent = this.template({ request: this.model });
		this.$el.html(renderedContent);
		this.attachSubviews();
		$("small.timeago").timeago();
		return this;
	},

	submitMessage: function(event){
		event.preventDefault();


		var attrs = {}
		attrs["content"] = $(event.currentTarget).serializeJSON().message["content"];
		$(event.currentTarget).trigger("reset");
		attrs["request_id"] = this.model.id;
		var message = new SofaHopping.Models.Message({});
		message.set(attrs);

		message.save({}, {
			success: function(data){

				this.model.set(data.attributes);
				this.model.messages().add(message);
			}.bind(this)
		})
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
