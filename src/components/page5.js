import m from "mithril";
import stream from 'mithril/stream';
import { Menu } from "./menu";

const listExample = {
    view: (v) => m("div",[
        m("br"),
        m('ul.list-group', v.attrs.passed()    // ricevuto dal componente padre
        .split('')
        .map(c => m('li.list-group-item', c))
        )
    ])
}

export function Page5Component(vnode) {
    
    let input = stream('default');  // modello reattivo !!!!
    let checked = stream(false);

    // si definisce la dipendenza di una variabile all'altra
    let dependentVar = input.map(input=>input.length>=10?"too long":"");

    return {
        view: () => m(".container.in", [
            m(Menu),
            m("br"),
            m("p",["Esempio di ", m("strong", "stream()"),", libreria di oggetti reattivi"]),
            m("form",
                    [
                        m(".form-group",[
                                m("label[for='formGroupExampleInput']", "test input"),
                                m("input.form-control[id='formGroupExampleInput'][placeholder='Example input'][type='text']",
                                {
                                    oninput: e => input(e.target.value),
                                    value: input()
                                }
                                /*
                                    Oppure si utilizza l'helper function: m.withAttr
                                    che lega l'attributo "value" ad uno stream "example":
                                    {        
                                        oninput: m.withAttr("value", example),      // setter
                                        value: example()                            // getter
                                    }
                                */
                                ),
                                m(".form-check",[
                                    m("label.form-check-label"),
                                    m("input.form-check-input[type=checkbox]",
                                    { 
                                        checked: checked(),
                                        onchange: m.withAttr('checked', checked) 
                                    }),"test checkbox"
                                ]),
                                m("p", "Binding: " + input + ' ' + dependentVar),
                                m("p", "checkbox: " + checked)
                            ]
                        )
                    ]
            ),
             m(listExample,{passed: input})  // passato dal componente padre (notare senza parentesi)
        ])
    };
}