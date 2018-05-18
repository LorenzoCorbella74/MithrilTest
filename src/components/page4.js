import m from "mithril";
import {Menu} from"./menu";
/* 
// rappresenta il modello dei dati
let  User = {
    list: [],
    loadList: function() {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users",
            withCredentials: true,
        })
        .then(function(result) {
            User.list = result.data
        })
    },

    current: {},
    load: function(id) {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
            withCredentials: true,
        })
        .then(function(result) {
            User.current = result
        })
    },

    save: function() {
        return m.request({
            method: "PUT",
            url: "https://rem-rest-api.herokuapp.com/api/users/" + User.current.id,
            data: User.current,
            withCredentials: true,
        })
    }
};

// COMPONENTE LISTA
export let UserListComponent = {
    oninit: User.loadList,
    view: function() {
        return m(".user-list", User.list.map(function(user) {
            return m("a.user-list-item", {href: "/edit/" + user.id, oncreate: m.route.link}, user.firstName + " " + user.lastName)
        }))
    }
}; */

// COMPONENTE FORM SAVE/EDIT
export let  UserFormComponent = {
    oninit: function(vnode) {User.load(vnode.attrs.id)},
    view: function() {
        return m("form", {
                onsubmit: function(e) {
                    e.preventDefault()
                    User.save()
                }
            }, [
            m("label.label", "First name"),
            m("input.input[type=text][placeholder=First name]", {
                oninput: m.withAttr("value", function(value) {User.current.firstName = value}),
                value: User.current.firstName
            }),
            m("label.label", "Last name"),
            m("input.input[placeholder=Last name]", {
                oninput: m.withAttr("value", function(value) {User.current.lastName = value}),
                value: User.current.lastName
            }),
            m("button.button[type=submit]", "Save"),
        ])
    }
};

// COMPONENTE CONTENITORE 
export let Layout = {
    view: function(vnode) {
         return m(".container", [
            m(Menu),
            m("br"), 
            m("nav", [
                m("a", {href: '/list',oncreate: m.route.link}, "Users")
            ]),
            /* m("section", vnode.children) */
        ]);
    }
};