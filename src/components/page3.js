import m from "mithril";
import {Menu} from"./menu";

/* 
    Invece di:

    export let Page3Component = {
    view: function(ctrl) {
        return m(".container", [
            m(Menu),
            m("br"),
            m("p","Siamo nella Pagina 3")
        ]);
        }
    }

    si usa la "closure component" syntax:
*/

export function Page3Component(vnode) {
    // vnode.state is undefined at this point
    var privateData = {
        test:"private data"
    };

    return {
        componentState:{
            test:"component data"
        },
        view: function(vnode) {
            return m(".container", [
                m(Menu),
                m("br"),
                m("p",["Esempio di ", m("strong", "closure compoenent syntax"),". ","Al posto di un oggetto Componente si usa una funzione che ritorna il componente"]),
                m('p',[
                    "Dati privati passati dal componente alla vista: ",
                    m("span.badge.badge-primary", privateData.test),
                    "Dati del componente alla vista: ",
                    m("span.badge.badge-primary", vnode.state.componentState.test)
                ]),
                
            ]);
        },
        oncreate: function() {
            console.log("We've created a closure component", privateData.test)
        }
    }
}