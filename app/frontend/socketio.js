class SocketIO {
    constructor(url) {
        this.socket = io(url)
        this.socket.on('connect', this.onConnect.bind(this))
        this.socket.on('event', this.onEvent.bind(this))
        this.socket.on('disconnect', this.onDisconnect.bind(this))
    }

    onConnect() {
        console.log('connect')
    }

    onEvent() {
        console.log('event')
    }

    onDisconnect() {
        console.log('disconnect')
    }
}

module.exports = SocketIO
