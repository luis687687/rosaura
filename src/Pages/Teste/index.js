import { BuildComponent, defVariable, routeIn, varMonitor, varPrint } from "../../../rosaura/rozaura/index.js"
import screenMonitor from "../../Components/screenMonitor/index.js";

export default ({routerref}) => {


    const [mensagem, setMensagem] = defVariable("Luis")
   
    var c = 0;
   
    routeIn( (objecto) => {
        const {params} = objecto
        console.log(params)
        setMensagem(params.luis)
        
    }, {routerref})
    
    const scr = screenMonitor()

    varMonitor( () => {

        console.log("Mudou o screen ", scr.value)
    }, [scr])


    return(
        BuildComponent({
            childElements: [
                BuildComponent({
                    text: varPrint("Rota /teste : {} ", [mensagem]),
                    type: 'h1'
                }),
                BuildComponent( {
                    type: "a",
                    text: 'ir para outra',
                    attributes: {
                        href: '/teste2'
                    }
                })
            ],
            style: {
                alignItems: "center",
                justifyContent: 'center'
            }
        })
    )
}