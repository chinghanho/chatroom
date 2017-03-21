class Channel {

    constructor(username, url) {
        this.app = app
        this.socket = io(url)
        this.socket.on('connect', this.onConnect.bind(this))
        this.socket.on('chat message', this.onChatting.bind(this))
        this.socket.on('disconnect', this.onDisconnect.bind(this))
    }

    join(user) {
        //
    }

    onConnect() {
        console.log('connect')
        this.input = document.createElement('input')
        this.button = document.createElement('button')
        this.button.innerText = 'send'
        this.app.container.appendChild(this.input)
        this.app.container.appendChild(this.button)
        this.button.addEventListener('click', this.onSend.bind(this))
    }

    onChatting(message) {
        var messageElem = document.createElement('div')
        messageElem.innerText = message
        this.app.container.prepend(messageElem)
    }

    onDisconnect() {
        console.log('disconnect')
    }

    onSend(event) {
        event.preventDefault()
        this.socket.emit('chat message', this.input.value)
    }

}

module.exports = Channel
