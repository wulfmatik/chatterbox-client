// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: function(message, boolean) {
    if (boolean) {
      var friend = _.template(`
      <div class="chat <%- username %>" style='color: red'>
        <div class="username"> <%- username %> </div>
        <div><%- text %></div>
        <div><%- roomname %></div>
        <div></div>
      </div>
    `);
      return friend(message);
    } else {
      var enemy = _.template(`
    <div class="chat <%- username %>">
      <div class="username"> <%- username %> </div>
      <div><%- text %></div>
      <div><%- roomname %></div>
      <div></div>
    </div>
  `);
      return enemy(message);
    }
  }
};