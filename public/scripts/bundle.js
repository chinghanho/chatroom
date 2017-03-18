(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Room = require('./room');

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.container = document.getElementById('app');
        this.init();
    }

    _createClass(App, [{
        key: 'init',
        value: function init() {
            var input = document.createElement('input');
            var button = document.createElement('button');
            input.setAttribute('tabindex', 1);
            button.setAttribute('tabindex', 2);
            button.innerText = 'submit';
            this.container.appendChild(input);
            this.container.appendChild(button);

            button.addEventListener('click', function () {

                if (input.value && input.value.length > 0) {
                    button.remove();
                    input.remove();
                    new Room('/');
                } else {
                    alert('Input can not be blank!');
                }
            });
        }
    }]);

    return App;
}();

var app = new App();

},{"./socketio":2}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SocketIO = function () {
    function SocketIO(url) {
        _classCallCheck(this, SocketIO);

        this.socket = io(url);
        this.socket.on('connect', this.onConnect.bind(this));
        this.socket.on('event', this.onEvent.bind(this));
        this.socket.on('disconnect', this.onDisconnect.bind(this));
    }

    _createClass(SocketIO, [{
        key: 'onConnect',
        value: function onConnect() {
            console.log('connect');
        }
    }, {
        key: 'onEvent',
        value: function onEvent() {
            console.log('event');
        }
    }, {
        key: 'onDisconnect',
        value: function onDisconnect() {
            console.log('disconnect');
        }
    }]);

    return SocketIO;
}();

module.exports = SocketIO;

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
