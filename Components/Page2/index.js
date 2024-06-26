import BuildComponent from "../../Rosaura/BuildComponent/index.js";
import defVariable from "../../Rosaura/DataBind/defVariable/index.js";
import varMonitor from "../../Rosaura/DataBind/varMonitor/index.js";
import varPrint from "../../Rosaura/DataBind/varPrint/index.js";
import paramsMonitor from "../../Rosaura/RosauraRouter/paramsMonitor/index.js";
import routeLeave from "../../Rosaura/RosauraRouter/routeLeave/index.js";
import useFile from "../../Rosaura/useFile/index.js";

export default props => {
    const {v, setV} = props
    const [ref, setRef] = defVariable()
    varMonitor( _ => {
        if(ref.element){
           ref.element.style.color = v.value % 2 == 0 ? "blue" : "green"
           
        }
     }, [v])
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