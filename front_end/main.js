'use strict';

const messageURL = 'http://localhost:3000/messages'

const getMessages = () => {
  $.ajax({
    url: messageURL
  }).done(data => {
    showMessages(data);
  });
};

const postMessage = (message) => {
  $.ajax({
    type: 'post',
    url: messageURL,
    data: JSON.stringify({ "message" : {"content" : message }}),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: () => console.log('yay!'),
    error: () => console.log('boo!')
  });
};

const showMessages = (messages) => {
  let content = '';
  messages.forEach((message) => {
    content += `<p>${message.content}</p>`;
  });
  $('#message-field').append(content);
};

$('#send-button').click(() => {
  console.log('firing');
  postMessage($('#message').val());
});

getMessages();
