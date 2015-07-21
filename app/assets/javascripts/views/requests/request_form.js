SofaHopping.Views.RequestForm = Backbone.View.extend({
  template: JST["requests/requests_form"],

  events:{
    "click #close_request_modal": "destroyRequestForm",
    "submit #create_request": "submitRequestForm"
  },

  initialize: function(options){
    this.requestType = options.requestType;
  },

  render: function(){
    var renderedContent = this.template({ user: this.model, requestType: this.requestType });
    this.$el.html(renderedContent);
    $("body").append(this.$el);
    this.createDatePicker();

    return this;
  },

  destroyRequestForm: function(){
    this.remove();
  },

  submitRequestForm: function(event){
    event.preventDefault();
    var attrs = $(event.currentTarget).serializeJSON().request
    var tripRequest = new SofaHopping.Models.Request({});
    var tripLocation = this.model.get("location")
    
    tripRequest.set(attrs);
    tripRequest.set("requester_type", "guest")
    tripRequest.set("location", tripLocation)

    tripRequest.save({}, {
      success: function(){
        this.destroyRequestForm();
      }.bind(this)
    })

  },


  createDatePicker: function(){
    $( ".datepicker" ).datepicker({
      dateFormat: "dd/mm/yy"
    });
  }

})
