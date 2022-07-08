// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick());
    RoomsView.$select.on('click', RoomsView.handleChange());
  },

  render: function() {
    // TODO: Render out the list of rooms.

    for (var i = 0; i < Rooms._data.length; i++) {
      RoomsView.$select.append(Rooms._data[i]);
    }

  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // var roomList = Messages.retrieve(roomname);
    // for (var i = 0; i < roomList.length; i++) {
    //   MessagesView.renderMessage(roomList[i]);
    // }
    var $room = roomname;
    //console.log(RoomsView.$select);
    Rooms.add(roomname);
    console.log('renderRoom:', Rooms);
    RoomsView.$select.append(roomname);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    RoomsView.$button.click(function() {
      var room = prompt('Please enter your room name');
      Rooms.add(room);
      console.log(Rooms);
      RoomsView.$select.append(room);
    });
  }

};
