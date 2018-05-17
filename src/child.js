import m from "mithril";

// componente figlio (ogni componente un file)
// si esporta con: exports.component = {
// si importa con: var ChildComponent = require('./child').component
export let ChildComponent = {
    view: function(vnode){
        return m(".container.bg-faded",[
            m("h3",{class: "lead"},"Componente figlio"),
            m('p',["Dati passati dal componente padre: " , m("span.badge.badge-info", vnode.attrs.secret)]) // si leggono i dati dal componente padre!!
        ]);
    }
};