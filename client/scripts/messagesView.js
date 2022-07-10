// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.
var MessagesView = {

  $chats: $('#chats'),
  $chat: $('.chat'),
  $username: $('.username'),

  initialize: function() {
    MessagesView.render();
    MessagesView.$chats.on('click', '.chat .username', MessagesView.handleClick);
  },

  render: function() {
    // TODO: Render _all_ the messages.
   // console.log('Messages data arr in render func', Messages._data);
    for (var i = 0; i < Messages._data.length; i ++) {
      this.renderMessage(Messages._data[i]);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    //console.log(Friends._data)
    if (Friends._data.includes(message.username)) {
      var $message = MessageView.render(message, true);
      console.log('username', message.username);
      this.$chats.append($message);
    } else {
      var $message = MessageView.render(message, false);
      this.$chats.append($message);
    }
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    Friends._data.push(this.innerText);
  }
};