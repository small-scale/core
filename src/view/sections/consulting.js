import m from "mithril"

const Consulting = {
    view: (vnode)=>{
        return [
            [ m("h1", {"class":"mt6-ns mt5 mb0 f2 spartan f-subheadline-ns fw7", "style":`color:${vnode.attrs.color || "black"}`}, 
       "Consulting."
      ),
      m("section", {"class":"f4-ns f5 lh-copy"}, 
      [
        m("p", {class:"spvar f4"}, [`We are available for short and long-term consulting engagements. Preference is given to clients in our focus areas: health and justice. To get started, send an email to `, m("a", {href:"mailto:consulting@smallscale.org", class:"fw7 link", style:"color: hsl(8,67%,60%)"}, `consulting@smallscale.org` ), `.`]),
      
    ])]
           
          
        ]
    }
}

export default Consulting