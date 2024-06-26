import BuildComponent from "../../Rosaura/BuildComponent/index.js";
import varPrint from "../../Rosaura/DataBind/varPrint/index.js";
import routeIn from "../../Rosaura/RosauraRouter/routeIn/index.js";
import routeLeave from "../../Rosaura/RosauraRouter/routeLeave/index.js";
import useCss from "../../Rosaura/useCss/index.js";
import useFile from "../../Rosaura/useFile/index.js";


//rou
export default ({routerref, v, setV}) => {
    

    var time
    routeLeave((par) => {
      clearInterval(time) 
    }, {routerref})
    routeIn((par) => {
        time = setInterval( _ => console.log("1"), 1000)
        console.log("Rota aberta Page1 "+par)
    }, {routerref})
    
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