initMessageSelected();

function initMessageSelected() {
    messageSelected(1);
}

function messageSelected(id) {
    var messageContentEl = document.querySelector('#message-content');
    var message = messages.find(function(message) {
        return message.id === id;
    });

    messageContentEl.innerHTML = message.description;
}