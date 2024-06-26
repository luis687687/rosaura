import BuildComponent from "../../Rosaura/BuildComponent/index.js"
import defVariable from "../../Rosaura/DataBind/defVariable/index.js"
import varPrint from "../../Rosaura/DataBind/varPrint/index.js"
import FormComponent from "../../Rosaura/FormComponent/index.js"
import InputComponent from "../../Rosaura/InputComponent/index.js"
import routeLeave from "../../Rosaura/RosauraRouter/routeLeave/index.js"

export default prop => {

    const [a, setA] = defVariable("Clica-me")
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