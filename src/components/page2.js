import m from "mithril";
import {Menu} from "./menu";

let running = false;

function run() {
    running = true;
}
function stop() {
    running = false;
}



export let Page2Component = {

    data:[],

    oninit: function(vnode) {
        console.log("initialized PAge 2", vnode.attrs);
        this.data = [];
        window.setInterval(function () {
            for (var i = 0; i < 50; ++i) {
                this.data[i] = Math.random()*10;
            }
            if (running) {
                m.redraw();     // si forza il redraw !!!
            }
        }.bind(this), 20);
       
    },
    oncreate: function(vnode) {
        console.log("DOM created");
    },
    onbeforeupdate: function(vnode, old) {
        return true
    },
    onupdate: function(vnode) {
        console.log("DOM updated")
    },
    onbeforeremove: function(vnode) {
        console.log("exit animation can start")
        return new Promise(function(resolve) {
            // call after animation completes
            resolve()
        })
    },
    onremove: function(vnode) {
        console.log("removing DOM element")
    },

    view: function(ctrl) {
        console.log(ctrl);
        return m(".container", [
            m(Menu),
            m("br"),
            m("p",["Esempio di ", m("strong", "m.redraw()"),". ","Si creano 50 nuovi item ogni 20ms e si forza il rendering manualmente (in caso di eventi scatenati dall'utente si ha in automatico)"]),
            m('button.btn btn-success', {onclick: run}, 'Click to run'),
            m('button.btn btn-danger', {onclick: stop}, 'Click to stop'),
            m("br"),
            m('table.table table-condensed', [
            m('thead', m('tr', [m('th', 'Key'), m('th', 'Value')])),
            m('tbody', [
                ctrl.state.data.map(function (value, index) {
                    return m('tr', [
                        m('td', {style: 'width:50%'}, index),
                        m('td', {style: 'width:50%'}, value)
                    ]);
                })
            ])
        ])
        ]);
    }
}