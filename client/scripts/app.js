// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.


var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    setInterval(function() {
      if ($('select :selected').text()) {
        RoomsView.handleChange();
      } else {
        App.startSpinner();
        App.fetch(App.stopSpinner);
      }
    }, 5000);
  },

  fetch: function(callback = ()=>{}) {

    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log('server data', data);

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      Messages._data = [];
      Rooms._data = [];
      if (data.length !== 0) {
        for (var i = 0; i < data.length; i++) {
          Messages.add(data[i]);
          if (Rooms._data.indexOf(data[i]['roomname']) === -1) {
            Rooms.add(data[i]['roomname']);
          }
        }
      }
      $('#chats').empty();
      RoomsView.render();
      MessagesView.render();
    });
    callback();
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
