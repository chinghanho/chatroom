const App = require('./app')

let container = document.getElementById('app')

var app = new App({
    view: new Vue({ el: container })
})
