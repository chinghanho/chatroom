const Room = require('./room')

class App {

    constructor() {
        this.container = document.getElementById('app')
        this.init()
    }

    init() {
        var input = document.createElement('input')
        var button = document.createElement('button')
        input.setAttribute('tabindex', 1)
        button.setAttribute('tabindex', 2)
        button.innerText = 'submit'
        this.container.appendChild(input)
        this.container.appendChild(button)

        button.addEventListener('click', function () {

            if (input.value && input.value.length > 0) {
                button.remove()
                input.remove()
                new Room('/')
            } else {
                alert('Input can not be blank!')
            }

        })
    }

}

var app = new App()
