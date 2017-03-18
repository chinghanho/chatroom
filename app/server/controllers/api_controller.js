const x = exports

x.index = function (req, res) {

    console.log('GET /api')
    res.header('content-type', 'application/json')
    res.send({
        id: 1,
        content: 'Hello world'
    })

}
