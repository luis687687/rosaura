import BuildComponent from "../../node_modules/rozaura/BuildComponent/index.js";
import varPrint from "../../node_modules/rozaura/DataBind/varPrint/index.js";
import routeIn from "../../node_modules/rozaura/RosauraRouter/routeIn/index.js";
import routeLeave from "../../node_modules/rozaura/RosauraRouter/routeLeave/index.js";
import useCss from "../../node_modules/rozaura/useCss/index.js";
import useFile from "../../node_modules/rozaura/useFile/index.js";


//rou
export default ({routerref, v, setV}) => {
    return(
        BuildComponent({
            css: useCss("Page1"),
           childElements: [
                BuildComponent({ type: "h1",
                text: varPrint("Luis Marques {}", [v])}),
                BuildComponent({type:"a", text: "Clica em mim", attributes: {href: "/ana/teste/marques?luis=1234"}}),
                BuildComponent({type:"a", text: "Clica em mim", attributes: {href: "#lll"}}),
                BuildComponent({
                    type: "video",
                    attributes: {
                        src: useFile("ed.mp4"),
                        controls:true,
                        
                        muted: true
                    },
                    style: {
                        width: 200,
                        height: 400
                    }
                }),
                BuildComponent({
                    type: "img",
                    attributes: {
                        src: useFile("nbg.jpg"),
                        id: "lll"
                    },
                    events: {
                        click: _=>setV(v.value+1)
                    }
                })
           ]
        })
    )
}