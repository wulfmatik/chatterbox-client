// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  add: function(message) {
    this._data.push(message);
  },

  retrieve: function(param) {
    _.filter(Messages._data, function(item) {
      return item === param;
    });
  }

};