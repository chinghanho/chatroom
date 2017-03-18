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

io.on('connection', function () {
    console.log('a user connected')
})

server.listen(3000)
