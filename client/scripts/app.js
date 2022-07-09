// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.
var newestMessage;
var flag = false;


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
      //console.log('refresh');
      $(document).ready(function() {
        location.reload(true);
      });
      // App.fetch(App.stopSpinner);
      // $('#chats').load(Parse.server + ' #chats');
    }, 15000);
  },

  fetch: function(callback = ()=>{}) {

    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log('server data', data);

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.

      if (flag) {
        for (var j = (data.indexOf(newestMessage) - 1); j >= 0; j--) {
          Message.add(data[j]);
        }
        newestMessage = data[0]['message_id'];
      } else if (data.length !== 0) {
        Messages.add(data);
        for (var i = 0; i < data.length; i++) {
          if (Rooms._data.indexOf(data[i]['roomname']) === -1) {
            Rooms.add(data[i]['roomname']);
          }
        }
        newestMessage = data[0]['message_id'];
        flag = true;
      }

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
