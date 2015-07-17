SofaHopping.Views.UsersForm = Backbone.View.extend({
  template: JST['users/users_form'],

  initialize: function(options){
    this.listenTo(this.model, "sync change", this.render);
  },

  events: {
    "click #close_signup_modal": "destroySignUpForm",
    "submit #signup_form": "submit"
  },

  render: function(){
    var html = this.template({ user: this.model });
    this.$el.html(html);

    return this;
  },

  destroySignUpForm: function(){
    this.remove();
    Backbone.history.navigate("", { trigger: true });
  },


  submit: function(event){
    event.preventDefault();

    var $form = $(event.currentTarget);
    var userData = $form.serializeJSON();
    var that = this;
    debugger

    this.model.set(userData);
    this.model.save({}, {
      success: function(object, response){
        debugger
        SofaHopping.currentUser.fetch();
        Backbone.history.navigate("", { trigger: true });
      },
      error: function(data, jqxhr){
        debugger
        alert("Form invalid. Let the user know what went wrong.");
        console.log(data);
      }
    });
  }

});
