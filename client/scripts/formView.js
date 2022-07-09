// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    var NewMessage = {
      username: App.username,
      text: $('#message').val(),
      roomname: RoomsView.$select.val()
    };

    // messages render is not refreshing when submit button is used
    var pass = function() {
      App.fetch();
      $('#message').val('');
    };

    Messages.add(NewMessage);
    Parse.create(NewMessage, pass);
    // $('#chats').empty();
    // App.startSpinner();
    // App.fetch(App.stopSpinner);
    //console.log('server data upon submit', App.fetch());
    // console.log('message data', Messages._data);
    //console.log('click!');

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('enabled', status);
  }

};