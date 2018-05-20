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

    return {
        view: () => m(".container", [
            m(Menu),
            m("br"),
            m("p",["Esempio di ", m("strong", "stream")," libreria di oggetti reattivi"]),
            m("form",
                    [
                        m(".form-group",[
                                m("label[for='formGroupExampleInput']", "test label"),
                                m("input.form-control[id='formGroupExampleInput'][placeholder='Example input'][type='text']",
                                {
                                    value: input(),
                                    oninput: e => input(e.target.value)
                                }
                                ),
                                m("p", "Binding: " + input)
                            ]
                        )
                    ]
            ),
             m(listExample,{passed: input})  // passato dal componente padre
        ])
    };
}