const path = require('path')

const x = exports

x.index = function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
}
