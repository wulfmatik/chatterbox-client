// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    for (var i = 0; i < Rooms._data.length; i++) {
      //RoomsView.$select.append(Rooms._data[i]);
      RoomsView.renderRoom(Rooms._data[i]);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // var roomList = Messages.retrieve(roomname);
    // for (var i = 0; i < roomList.length; i++) {
    //   MessagesView.renderMessage(roomList[i]);
    // }
    var $room = roomname;
    var $option = $('<option>').val($room).text($room);
    RoomsView.$select.append($option);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    console.log('clicked room!');
    $('#chats').empty();
    for (var i = 0; i < Messages._data.length; i++) {
      if (Messages._data[i]['roomname'] === $('select :selected').text()) {
        console.log(Messages._data[i]);
        MessagesView.renderMessage(Messages._data[i]);
      }
    }
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
