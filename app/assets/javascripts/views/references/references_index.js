SofaHopping.Views.ReferencesIndex = Backbone.CompositeView.extend({
  template: JST["references/references_index"],


  events: {
    "click #create_reference": "createReferenceForm"
  },

  addReferenceView: function(reference){
    var referenceView = new SofaHopping.Views.ReferenceIndexItem({ model: reference });
    this.addSubview('.references-list', referenceView);
    this.$(".references-list").removeClass("none")
  },

  removeReferenceView: function(reference){
    this.removeModelSubview('.references-list', reference);
    if (this.collection.length === 0) { this.$(".references-list").addClass("none") }
  },

  initialize: function(){
    this.listenTo(this.collection, "sync", this.render)
    this.listenTo(this.collection, "add", this.addReferenceView);
    this.listenTo(this.collection, "remove", this.removeReferenceView);
    this.collection.each(this.addReferenceView.bind(this));
  },

  render: function(){

    var renderedContent = this.template({
      visitedUser: this.model, currentUser: SofaHopping.currentUser
    });
    this.$el.html(renderedContent);
    this.attachSubviews();
    
    return this;
  },

  createReferenceForm: function(event){
    event.preventDefault();
    var referenceForm = new SofaHopping.Views.ReferenceForm ({
      model: this.model
    });
    referenceForm.render();
  }
});
