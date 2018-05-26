import m from "mithril";
import { Menu } from "./menu";

const listExample = {
    view: (v) => m("div",[
        m("br"),
        m("p",["Esempio di ", m("strong", "loop")," degli elementi"]),
        m('ul.list-group', v.attrs.passed    // ricevuto dal componente padre
        .split('')
        .map(c => m('li.list-group-item', c))
        )
    ])
}

export function Page4Component(vnode) {
    
    let input = 'default';  // modello !!!!

    return {
        view: () => m(".container.in", [
            m(Menu),
            m("br"),
            m("p",["Esempio di ", m("strong", "two way data binding")," dalla vista al modello e viceversa"]),
            m("form",
                    [
                        m(".form-group",[
                                m("label[for='formGroupExampleInput']", "test label"),
                                m("input.form-control[id='formGroupExampleInput'][placeholder='Example input'][type='text']",
                                {
                                    value: input,
                                    oninput: e => input = e.target.value
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