SofaHopping.Views.ReferenceForm = Backbone.View.extend({
  template: JST["references/references_form"],

  events: {
    "click #close_reference_modal": "destroyReferenceForm",
    "click #cancel_reference_form": "destroyReferenceForm",
    "submit #create_reference_form": "createReference"
  },

  initialize: function(options){
    this.currentUser = options.currentUser;
  },

  render: function(){
    var renderedContent = this.template({ visitedUser: this.model });
    this.$el.html(renderedContent);
    $("body").append(this.$el);

    return this;
  },

  destroyReferenceForm: function(event){
    event.preventDefault();
    this.remove();
  },

  createReference: function(event){
    event.preventDefault();
    var attrs = $(event.currentTarget).serializeJSON().reference;
    var reference = new SofaHopping.Models.Reference({});
    var author_details = {};

    author_details["fname"] = this.currentUser.get('fname');
    author_details["lname"] = this.currentUser.get('lname');
    author_details["id"] = this.currentUser.id;
    author_details["location"] = this.currentUser.get('location');
    author_details["avatar_url"] = this.currentUser.get('avatar_url');
    reference.set(attrs);
    reference.set("author_details", author_details)
    reference.set("referencee_id", this.model.id);


    reference.save({}, {
      success: function(){
        var success = new SofaHopping.Views.SuccessMessage({ message: "Successfully added reference." });
        success.render();

        this.model.references().add(reference, { merge: true });
        this.remove();
      }.bind(this),

      error: function(model, response){
        var $errorEl = this.$(".errors");
        var errors = JSON.parse(response.responseText)
        var errorView = new SofaHopping.Views.ErrorDetails({ errors: errors, el: $errorEl });
        errorView.render();
      }.bind(this)
    })
  },


});
