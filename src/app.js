import m from "mithril";
import {store} from "./globals";

// COMPONENTS
import {Menu} from "./components/menu";
import {ChildComponent} from"./components/child";  
import {Page2Component} from"./components/page2";  
import {Page3Component} from"./components/page3";  
import {Page4Component} from"./components/page4";  
import {Page5Component} from"./components/page5";  
import {Page6Component} from"./components/page6";  
import {Page7Component} from"./components/page7";  

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
function testToggle(event){
    console.log('testFunc fired...',event);
    show=!show;
}
function testClass(event){
    console.log('testClass fired...',event);
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

    // NON FUNZIONA + IN MITHRIL 1 !!?!?!?!
    controller: function () {
        this.data = data;
        this.testCtrl = function(e) {
            console.log('testCtrl fired....');
        };
    },

    /* onbeforeremove: function(vnode) {
        vnode.dom.classList.add("exit")
        return new Promise(function(resolve) {
            setTimeout(resolve, 500)
        })
    }, */

    // la vista
    view: function (vnode) {
        console.log('Passed: ', vnode);    // il componente è un vnode
        return m(".container.in", [
            m(Menu),
            m("br"),
            m("h3.lead", "componente Padre"),
            m("p", ["Learning environment for the FE Framework ", m('span',[m('a',{href:'https://mithril.js.org/'},'Mithril')])]),
            m('button.btn.btn-primary',{onclick: function() {
                count++;
                vnode.state.secretData.skill++; /* SI ACCEDE ALLO STATO!!! */
            }}, !count? firstLabel: "skill " + vnode.state.secretData.skill),
            m("hr"),
            m('p',[
                "Dati passati dal componente alla vista: ",
                m("span.badge.badge-primary", vnode.state.secretData.profession),
                m("span.badge.badge-warning", vnode.state.secret),
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
            m('button.btn',{ onclick: this.controller.testCtrl}, "test ctrl"),    //  si testa una funzione presente nel ctrl DENTRO il componente
            m("hr"),

            // si passano i dati al componente figlio !!!
            m(ChildComponent,{secret:  vnode.state.secret})    
        ]);
    }
}

// Monta un componente su un elemento del DOM, 
// abilitando l'autoredraw da eventi dell'utente.
// m.mount(root, HelloWorldComponent);

// si utilizza il router abilitando l'autoredraw
m.route(document.body, "/home", {
    "/home": HelloWorldComponent, // defines `http://localhost/#!/home`
    "/page2": Page2Component, 
    "/page3": Page3Component, 
    "/page4": Page4Component, 
    "/page5": Page5Component, 
    "/page6": Page6Component, 
    "/page7": Page7Component, 
})