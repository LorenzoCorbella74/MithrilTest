import m from "mithril";
import stream from 'mithril/stream';
import {Menu} from "./menu";

const listExample = {
    view: (v) => m("div", [
        m("br"),
        m('ul.list-group', v.attrs.passed() // ricevuto dal componente padre
            .map(c => m('li.list-group-item', { key: c.id }, c.name))
        )
    ])
}

export function Page6Component(vnode) {

    /*
        Simple:
        const items = stream([]);
        m.request({
            method: 'GET',
            url: 'https://mithril-examples.firebaseio.com/books.json'
        }).then(items);
    */

    // oppure:
    let state = {
        items: stream([]),
        loadUsers: ()=> m.request({
            method: 'GET',
            url: 'https://mithril-examples.firebaseio.com/books.json'
        }).then(state.items)
    }

    return {
        oninit: state.loadUsers,
        view: () => m(".container.in", [
            m(Menu),
            m("br"),
            m("p", ["Esempio di ", m("strong", "m.request()"), "."]),
            m(listExample, {passed: state.items})     // passato dal componente padre (notare senza parentesi)
        ])
    };
}