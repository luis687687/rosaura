import { BuildComponent, defVariable, routeIn, varPrint } from "../../../rosaura/rozaura/index.js"

export default ({}) => {

    const [variavel_de_estado, setVariavelDeEstado] = defVariable(0)
    return(
        BuildComponent({
            style: { alignItems: "center", justifyContent:"center", gap: '20px'},
            childElements: [
                BuildComponent({text: varPrint("Contador de cliques {} ", [variavel_de_estado]),style: {width: "fit-content"}}),
                BuildComponent({
                    style: {
                        background: 'brown',
                        color: 'white',
                        width: 'fit-content',
                        padding: '10px 30px',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    },
                    text: "Clica",
                    events: { click: _ => setVariavelDeEstado(variavel_de_estado.value + 1)}
                })
            ]
        })
    )
}