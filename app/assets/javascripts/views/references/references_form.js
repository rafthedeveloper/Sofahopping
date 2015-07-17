SofaHopping.Views.ReferenceForm = Backbone.View.extend({
  template: JST["references/references_form"],

  events: {
    "click #close_reference_modal": "destroyReferenceForm",
    "click #cancel_reference_form": "destroyReferenceForm",
    "submit #create_reference": "createReference"
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
    reference.set(attrs);
    reference.set("referencee_id", this.model.id);

    reference.save({}, {
      success: function(){
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
  }
});
