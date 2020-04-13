import m from "mithril"

const Projects = {
    view: (vnode)=>{
        return  [ m("h1", {"class":"mt6-ns mt5 mb0 f2 spartan f-subheadline-ns fw7", "style":`color:${vnode.attrs.color || "black"}`}, 
        "Projects."
       ),
       m("section", {"class":"f4-ns f5 lh-copy"}, 
       [
        m("div", {class:"dt mv3 w-100 tc f1 mr2 white "}, [
            m("div",{class:"dtc ph3-ns ph1 w-20-ns w3 v-mid f3 pv2"}, [m("img",{class:"img w-100", src:"static/hnlogo.png"})]),
            m("div",{class:`dtc v-mid ph2 pv2 tl black`}, [
                m("p",{class: "f2-ns f4 lh-copy mv0 spartan"},"Health networks"),
                m("p",{class: "f4-ns f5 lh-copy mv0"}, "Building better data governance for children's hospitals.")
            ]),

        ]),

         m("a", {href:"https://detainrelease.com", class:"dt mv3 w-100 tc f1 mr2 white pointer"}, [
            m("div",{class:"dtc ph3-ns ph1 w-20-ns w3 v-mid f3 pv2"}, [m("img",{class:"img w-100", src:"static/drlogo.png"})]),
            m("div",{class:`dtc v-mid ph2 pv2 tl black`}, [
                m("p",{class: "f2-ns f4 lh-copy mv0 spartan"},"Detain/Release"),
                m("p",{class: "f4-ns f5 lh-copy mv0"}, "A simulation about algorithms, bail, and risk assessments.")
            ]),

        ]),

        m("p", {class:"spvar f4"}, [`Want to support an existing project? Start a new one? Email `, m("a", {href:"mailto:projects@smallscale.org", class:"fw7 link", style:"color: hsl(8,67%,60%)"}, `projects@smallscale.org` ), `.`]),

    ]
       
       )]
        
       
    }
}

export default Projects