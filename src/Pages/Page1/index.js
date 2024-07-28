import Rosaura, {BuildComponent, varPrint} from "../../../rosaura/rozaura/index.js"
import Card from "../../Components/Card/index.js"
import LeftBar from "../../Components/LeftBar/index.js"
import Title from "../../Components/Title/index.js"
import Message from "../Message/index.js"

export default ({routerref, title, setTitle}) => {
    
    
    return(
     BuildComponent({
        style: {flexDirection: 'row'},
        childElements: [
            LeftBar(),
            BuildComponent({
            style: { padding: '30px', flex: 1},
            childElements: [
                Title({text: varPrint("Página 1 😎")}),
                Message()
            ]
            })
        ]
     })   
    )
}