import m from "mithril"

const Contact = {
    view: (vnode)=>{
        return [ m("h1", {"class":"mt6-ns mt5 mb0 f2 spartan f-subheadline-ns fw7", "style":`color:${vnode.attrs.color || "black"}`}, 
       "Get in touch."
      ),
      m("section", {"class":"f4-ns f5 lh-copy"}, 
      [

            
        m("p", {class:"spvar fw4 f4"}, [`General inquiries: `, m("a", {href:"mailto:hi@smallscale.org", class:"fw7 link", style:"color: hsl(8,67%,60%)"}, `hi@smallscale.org` ), `.`]),
        m("p", {class:"spvar fw4 f4"}, [`Want to contribute? Send a CV and a note to: `, m("a", {href:"mailto:jobs@smallscale.org", class:"fw7 link", style:"color: hsl(8,67%,60%)"}, `jobs@smallscale.org` ), `.`]),
      
    ])]
    }
}

export default Contact