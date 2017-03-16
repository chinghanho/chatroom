const express = require('express')
const http = require('http')
const path = require('path')
const socketIO = require('socket.io')

var app = express()
var server = http.Server(app)
var io = socketIO(server)

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.use(express.static(path.join(__dirname, '..', '..', 'public')))

app.get('/data.json', function (req, res) {
    res.header('content-type', 'application/json')
    res.send({
        id: 1,
        content: 'Hello world'
    })
})

io.on('connection', function () {
    console.log('a user connected')
})

server.listen(3000)
