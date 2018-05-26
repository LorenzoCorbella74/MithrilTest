import m from "mithril";
import stream from 'mithril/stream';
import { Menu } from "./menu";

/* Esempio di MODELLO */
const model = {
    query: '',
    tracks: [],
};

/* Esempio di AZIONI che manipolano il modello */
const actions = ({
    setQuery: q => model.query = q,
    erase: () => model.query = '',
    search: () =>
        m.request({
            dataType: 'jsonp',
            url: 'https://itunes.apple.com/search',
            data: {
                term: model.query,
                media: 'musicVideo'
            }
        })
        .then(data => {
            model.tracks = data.results
        })
});

/* COMPONENTI */
const findForm = {
    view: () => m("form",
        m(".form-group",
            m(".input-group", [
                m("span.input-group-btn",
                    m("button.btn.btn-danger[type='button']", {onclick: actions.erase},"X")
                ),
                m("input.form-control[placeholder='Product name'][type='text']", {
                    oninput: m.withAttr('value', actions.setQuery),
                    value: model.query
                }),
                m("span.input-group-btn",
                    m("button.btn.btn-success[type='button']", {onclick: actions.search}, "Search")
                )
            ])
        )
    )
}   

const tableRowComp = tracks =>
    tracks.map(track => m('tr', [
        m('td', m('img', {
            src: track.artworkUrl100
        }), track.trackName),
        m('td', track.artistName),
        m('td', track.trackPrice)
    ]))

const tableComponent = {
    view: () =>
        m('table.table.table-striped',
            m('thead', [m('tr', [
                ['Track', 'Artist', 'Price'].map(h => m('th', h))
            ])]),
            m('tbody', [tableRowComp(model.tracks)])
        )
}

// taken from http://mike-ward.net/2018/05/09/mithril-rising/
export function Page7Component(vnode) {

    return {
        oninit: () => {
            actions.setQuery('Testament');
            actions.search()
        },
        view: () => m(".container.in", [
            m(Menu),
            m("br"),
            m('h2', 'ITunes Sampler'),
            m(findForm),
            m(tableComponent)]
        )
    };

}