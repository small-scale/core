import m from "mithril"

const Splash = {
    view: (vnode)=>{
        return [
            m("p", {"class":'spartan f2-ns f4'}, `small scale helps people make better decisions about data and technology.`),
            m("p", {"class":'spartan fw5 f3-ns f5'}, `Our projects range from data governance models to interactive simulations, and focus primarily on health and justice.`),
        ]
    }
}

export default Splash