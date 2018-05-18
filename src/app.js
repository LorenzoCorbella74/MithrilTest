import m from "mithril";
import {store} from "./models";

import {Menu} from "./menu";
import {ChildComponent} from"./child";  
import {Page2Component} from"./page2";  

const root = document.body;

/* 
    m.render: renderizza un singolo vnode:

    m.render(root, m(".container", [
        m("h1", {class: "header"}, "Mithril test"),
        m("p", "Learning environment..."),
    ])); 
*/

const firstLabel = 'test handler'
let count = 0;  // dati ESTERNI al componente (modificabili)

let HelloWorldComponent = {
    // dati 'privati' del componente (modificabili) - Component state
    secretData:{
        profession:"haker",
        skill:5
    },
    secret: "fake",
    // la vista
    view: function (componente) {
        console.log('Passed: ', componente);    // il componente è un vnode
        return m(".container", [
            m(Menu),
            m("h3", {class: "lead"}, "componente Padre"),
            m("p", ["Learning environment for the FE Framework ", m('span',[m('a',{href:'https://mithril.js.org/'},'Mithril')])]),
            m('button.btn.btn-primary',{onclick: function() {
                count++;
                componente.state.secretData.skill++;
            }}, !count? firstLabel: "skill " + componente.state.secretData.skill),
            m("hr"),
            m('p',[
                "Dati passati dal componente alla vista: ",
                m("span.badge.badge-primary", componente.state.secretData.profession),
                m("span.badge.badge-warning", componente.state.secret),
            ]),
            m('p',["Dati passati da obj globale alla vista: " , m("span.badge.badge-info", store.nome)]),
            m('button.btn.btn-primary',{onclick: function() {
                store.age++;
            }}, "Modifica oggetto globale: "+store.age),
            m("hr"),
            m(ChildComponent,{secret:  componente.state.secret})    // si passano i dati al componente figlio !!!
            
            
        ]);
    }
}

// Monta un componente su un elemento del DOM, 
// abilitando l'autoredraw da eventi dell'utente.
// m.mount(root, HelloWorldComponent);

m.route(document.body, "/home", {
    "/home": HelloWorldComponent, // defines `http://localhost/#!/home`
    "/page2": Page2Component
})