import BuildComponent from "../../node_modules/rozaura/BuildComponent/index.js";
import defVariable from "../../node_modules/rozaura/DataBind/defVariable/index.js";
import varMonitor from "../../node_modules/rozaura/DataBind/varMonitor/index.js";
import varPrint from "../../node_modules/rozaura/DataBind/varPrint/index.js";
import paramsMonitor from "../../node_modules/rozaura/RosauraRouter/paramsMonitor/index.js";
import routeIn from "../../node_modules/rozaura/RosauraRouter/routeIn/index.js";
import routeLeave from "../../node_modules/rozaura/RosauraRouter/routeLeave/index.js";
import useFile from "../../node_modules/rozaura/useFile/index.js";

export default props => {
    const {v, setV, routerref} = props
    const [ref, setRef] = defVariable()
    varMonitor( _ => {
        if(ref.element){
           ref.element.style.color = v.value % 2 == 0 ? "blue" : "green"
           
        }
     }, [v])

     routeIn(()=> console.log("Page 2 in "), {routerref})
    return(
        BuildComponent({
           childElements: [
                BuildComponent({ 
                    ref,
                    type: "h1",
                text: varPrint("Outra página {}", [v])}),
                BuildComponent({type:"a", text: "Voltar", attributes: {href: "/page3"}}),
                BuildComponent({type: "video", attributes: {src:useFile("ed.mp4"), controls:true}, style:{width:300}}),
                BuildComponent({type: "a", text: 'click id', attributes: {href: "#img"}}),
                BuildComponent({type:'img', attributes: {src: useFile("fgb.jpg"), id:"img"}})
           ]
        })
    )
}