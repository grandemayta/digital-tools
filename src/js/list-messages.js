var messages = [
    { id: 1, sender: 'Gabriel Mayta', subject: 'This is a test', description: '.......1' },
    { id: 2, sender: 'Gabriel Mayta', subject: 'This is a test', description: '.......2' },
    { id: 3, sender: 'Gabriel Mayta', subject: 'This is a test', description: '.......3' },
    { id: 4, sender: 'Gabriel Mayta', subject: 'This is a test', description: '.......4' },
    { id: 5, sender: 'Gabriel Mayta', subject: 'This is a test', description: '.......5' }
];

var listMessagesEl = document.querySelector('#list-messages');

messages.forEach(function(message, index) {
    listMessagesEl.innerHTML += templateListMessage(message, index === 0 ? 'active' : '');
});

function templateListMessage(message, active) {
    var template = '<a href="#" onclick="messageSelected(' + message.id + ')" class="list-group-item ' + active + '">';
        template += '<h4 class="list-group-item-heading">' + message.sender + '</h4>';
        template += '<p class="list-group-item-text">' + message.subject + '</p>';
        template += '</a>';

    return template;
}