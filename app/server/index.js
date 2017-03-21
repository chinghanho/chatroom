const express = require('express')
const http = require('http')
const path = require('path')
const socketIO = require('socket.io')
const route = require('../../config/route')

var app = express()
var server = http.Server(app)
var io = socketIO(server)

app.use(express.static(path.join(__dirname, '..', '..', 'public')))
app.use('/', route)

io.on('connection', client => {
    console.log('a user connected')

    client.on('chat message', msg => {
        console.log(msg)
        io.emit('chat message', msg)
    })
})

server.listen(3000)
