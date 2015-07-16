SofaHopping.Views.ReferenceForm = Backbone.View.extend({
  template: JST["references/references_form"],

  events: {
    "click #close_reference_modal": "destroyReferenceForm",
    "submit #create_reference": "createReference"
  },

  render: function(){
    var renderedContent = this.template({ visitedUser: this.model });
    this.$el.html(renderedContent);
    $("body").append(this.$el);

    return this;
  },

  destroyReferenceForm: function(){
    this.remove();
  },

  createReference: function(event){
    event.preventDefault();
    var attrs = $(event.currentTarget).serializeJSON().reference;
    var reference = new SofaHopping.Models.Reference({});
    reference.set(attrs);
    reference.set("referencee_id", this.model.id);
    reference.set("referencer_id", SofaHopping.currentUser.id);
    reference.save({}, {
      success: function(){
        debugger
      }
    })
    debugger
  }
});
