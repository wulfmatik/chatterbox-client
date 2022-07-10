// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    event.preventDefault();

    var NewMessage = {
      username: App.username,
      text: $('#message').val(),
      roomname: RoomsView.$select.val()
    };

    var pass = function() {
      App.fetch();
      $('#message').val('');
    };

    Messages.add(NewMessage);
    Parse.create(NewMessage, pass);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('enabled', status);
  }

};