import BuildComponent from "../../node_modules/rozaura/BuildComponent/index.js"
import defVariable from "../../node_modules/rozaura/DataBind/defVariable/index.js"
import varPrint from "../../node_modules/rozaura/DataBind/varPrint/index.js"
import FormComponent from "../../node_modules/rozaura/FormComponent/index.js"
import InputComponent from "../../node_modules/rozaura/InputComponent/index.js"
import routeIn from "../../node_modules/rozaura/RosauraRouter/routeIn/index.js"
import routeLeave from "../../node_modules/rozaura/RosauraRouter/routeLeave/index.js"

export default ({routerref}) => {

    const [a, setA] = defVariable("Clica-me")
    routeIn(()=> {
        console.log("Entrou na rota page3 ")
    }, {routerref})

    routeLeave( () => {
        console.log("Saiu da rota page3 ")
    }, {routerref})
    return(
        BuildComponent({
            
            text: varPrint("Testte {} ", [a, a]),
           
            style: {
                color: "red"
            },
            childElements: [
                FormComponent({
                    action: "#",
                    childElements: [
                        InputComponent({
                            type: "number",
                            name: "teste",
                                     
                        }),
                        InputComponent({
                            type: "submit",
                            value: a,
                            events: {
                                click: _=>setA("Clicaste-me")
                            }
                        })
                    ]
                })
                ,
                BuildComponent(
                    {
                        type: "a",
                        attributes: {
                            href: "/"
                        },
                        text: "clique"
                    }
                )
            ]
        })
    )
}