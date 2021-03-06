import m from "mithril";

export let Menu = {
    view: function() {
        return m("nav.navbar.navbar-expand-lg.navbar-light.bg-light",
        [
          m("a.navbar-brand[href='#']", "Mithril TEST"),
          m("button.navbar-toggler[aria-controls='navbarSupportedContent'][aria-expanded='false'][aria-label='Toggle navigation'][data-target='#navbarSupportedContent'][data-toggle='collapse'][type='button']", 
            m("span.navbar-toggler-icon")
          ),
          m(".collapse.navbar-collapse", 
            m("ul.navbar-nav.mr-auto",
              [
                m("li.nav", 
                  m("a.nav-link[href=/home]", {oncreate: m.route.link},"Home")
                ),
                m("li.nav-item", 
                  m("a.nav-link[href=/page2]",  {oncreate: m.route.link},"redraw")
                ),
                m("li.nav-item", 
                  m("a.nav-link[href=/page3]",  {oncreate: m.route.link},"closure")
                ),
                m("li.nav-item", 
                  m("a.nav-link[href=/page4]",  {oncreate: m.route.link},"Binding")
                ),
                m("li.nav-item", 
                  m("a.nav-link[href=/page5]",  {oncreate: m.route.link},"Stream")
                ),
                m("li.nav-item", 
                  m("a.nav-link[href=/page6]",  {oncreate: m.route.link},"Request")
                ),
                m("li.nav-item", 
                  m("a.nav-link[href=/page7]",  {oncreate: m.route.link},"app sample")
                )
              ]
            )
          )
        ]
      )
    }
};