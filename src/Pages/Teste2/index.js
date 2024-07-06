import { BuildComponent, defVariable, routeIn, varPrint } from "../../../rosaura/rozaura/index.js"

export default ({routerref}) => {


    const [mensagem, setMensagem] = defVariable("Luis")
   
    var c = 0;
   
    routeIn( (objecto) => {
        const {params} = objecto
        console.log(params)
        setMensagem(params.luis)
        window.onresize = () => {

            console.log(" Resized from route /teste2", window.innerWidth)
        }
       
    }, {routerref})
    


    return(
        BuildComponent({
            childElements: [
                BuildComponent({
                    text: varPrint("Valor do parâmetro: {} ", [mensagem]),
                    type: 'h1'
                }),
                BuildComponent( {
                    type: "a",
                    text: 'ir para outra',
                    attributes: {
                        href: '/teste'
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