import m from "mithril";
import {Menu} from"./menu";

export let Page2Component = {
    view: function() {
        return m(".container", [
            m(Menu),
            m("p", "Esempio di pagina due")
        ]);
    }
}