class Panel {

    constructor({ container }) {
        this.container = container
        this.text = `
            <div id="panel" class="control-panel">
              <form id="join-form">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam numquam sint iusto ea aut amet, adipisci perspiciatis a soluta voluptate, cum dolor expedita nesciunt, ipsum tenetur alias architecto commodi eos.
                </p>
                <div class="form-group">
                  <input id="input-username" type="text" name="username" class="form-control" tabindex="1" placeholder="Username">
                </div>
                <div class="form-group">
                  <button id="btn-join" class="btn btn-default btn-block">Join</button>
                </div>
              </form>
            </div>
        `

        var div = document.createElement('div')
        div.innerHTML = this.text
        this.elem = div.children[0]

        this.container.appendChild(this.elem)

        let form = document.getElementById('join-form')
        let input = document.getElementById('input-username')

        form.addEventListener('submit', event => {

            event.preventDefault()

            if (input.value && input.value.length > 0) {
                console.log('User %s joined the app.', input.value)
                this.exit()
                // app.setUsername(input.value)
                // form = null
                // input = null
            } else {
                alert('Input can not be blank!')
            }

        })
    }

    exit() {
        console.log('panel exit')
        this.elem.classList.add('exit')
        this.elem.addEventListener('transitionend', this._onExited())
    }

    // private

        _onExited() {
            this._exitedCallack = this._exitedCallack || this.__onExited.bind(this)
            return this._exitedCallack
        }

        __onExited() {
            this.elem.removeEventListener('transitionend', this._onExited())
            console.log('exited')
            this.elem.innerHTML = null
            this.elem.classList.remove('exit')
            this.elem.classList.add('enter')
        }

}

module.exports = Panel
