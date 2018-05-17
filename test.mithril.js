/*Esempio di condivisione dei dati tra componenti tramite vnode.state e vnode.attrs */

var ButtonComponent = {
    view: function (vnode) {
        return m('button', {
            onclick: function () {
                vnode.attrs.current.title = vnode.attrs.text // 2) qua si riceve dentro il componente
            }
        }, vnode.attrs.text)
    }
}

var Display = {
    view: function (vnode) {
        return m('h3', vnode.attrs.text)
    }
}

var App = {
    current: {
        title: null
    },
    view: function (vnode) {
        return m('', m(ButtonComponent, {
                current: vnode.state.current,
                text: "Left"
            }) // 1) qua si passa dentro il componente
            , m(ButtonComponent, {
                current: vnode.state.current,
                text: "Right"
            }), m(Display, {
                text: vnode.state.current.title
            })
        )
    }
}

m.mount(document.body, App)

/* 
    Esempio di global state us component state 
    Si fa un file per ogni componente
*/

// ButtonComponent.js
exports.component = {
    view: function (vnode) {
        return m('button', {
            onclick: function () {
                vnode.attrs.current.title = vnode.attrs.text
            }
        }, vnode.attrs.text)
    }
}

// Display.js
exports.component = {
    view: function (vnode) {
        return m('h3', vnode.attrs.text)
    }
}

var ButtonComponent = require('./ButtonComponent').component
var Display = require('./Display').component

var App = {
    current: {
        title: null
    },
    view: function (vnode) {
        return m('', m(ButtonComponent, {
            current: vnode.state.current,
            text: "Left"
        }), m(ButtonComponent, {
            current: vnode.state.current,
            text: "Right"
        }), m(Display, {
            text: vnode.state.current.title
        }))
    }
}

m.mount(document.body, App)

// STEP 2: invece di avere lo stato dentro un componente si 
// può metterelo dentro un file  e avere uno stato globale dentro Globals.js
exports.state = {
    current: null
}

// e dentro ButtonComponent.js
var State = require('./Globals').state

exports.component = {
    view: function (vnode) {
        return m('button', {
            onclick: function () {
                State.current = vnode.attrs.text
            }
        }, vnode.attrs.text)
    }
}
// dentro Display.js
var State = require('./Globals').state

exports.component = {
    view: function () {
        return m('h3', State.current)
    }
}

// dentro index.js
var ButtonComponent = require('./ButtonComponent').component
var Display = require('./Display').component

var App = {
    view: function (vnode) {
        return m('', m(ButtonComponent, {
            text: "Left"
        }), m(ButtonComponent, {
            text: "Right"
        }), m(Display))
    }
}

m.mount(document.body, App)