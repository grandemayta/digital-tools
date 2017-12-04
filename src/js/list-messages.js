import messages from "./messages";

let listMessagesEl = document.querySelector('#list-messages');

const templateListMessage = (message, active) => {
    return `<a href="#" onclick="messageSelected(${message.id})" class="list-group-item ${active}">
                <h4 class="list-group-item-heading">${message.sender}</h4>
                <p class="list-group-item-text">${message.subject}</p>
            </a>`;
}

messages.forEach((message, index) => {
    listMessagesEl.innerHTML += templateListMessage(message, index === 0 ? 'active' : '');
});