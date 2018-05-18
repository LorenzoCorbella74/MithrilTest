import m from "mithril";
import {store} from "./globals";

// COMPONENTS
import {Menu} from "./components/menu";
import {ChildComponent} from"./components/child";  
import {Page2Component} from"./components/page2";  
import {Page3Component} from"./components/page3";  

const root = document.body;

/* 
    m.render: renderizza un singolo vnode:
    m.render(root, m(".container", [
        m("h1", {class: "header"}, "Mithril test"),
        m("p", "Learning environment..."),
    ])); 
*/

let show = false;
let dinamicClass = "btn-info"; // .btn-danger

// funzione esterna al componente
function testToggle(){
    console.log('testFunc fired...');
    show=!show;
}
function testClass(){
    console.log('testClass fired...');
    dinamicClass = dinamicClass=='btn-info'? 'btn-danger':'btn-info';
}

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
            m("br"),
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
            m('button.btn.btn-info',{onclick: testToggle}, "toggle visibility"),
            show ? m("p", "vedo") : null,
            m("hr"),
            m('button.btn',{class:dinamicClass, onclick: testClass}, "toggle class"),    //  se la classe non cambia si mette nel selettore, se dinamica si mette nell'attributo
            m("hr"),
            m(ChildComponent,{secret:  componente.state.secret})    // si passano i dati al componente figlio !!!
        ]);
    }
}

// Monta un componente su un elemento del DOM, 
// abilitando l'autoredraw da eventi dell'utente.
// m.mount(root, HelloWorldComponent);

// si utilizza il router
m.route(document.body, "/home", {
    "/home": HelloWorldComponent, // defines `http://localhost/#!/home`
    "/page2": Page2Component, 
    "/page3": Page3Component, 
})