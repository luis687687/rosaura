import {BuildComponent, useFile, varPrint, useCss} from "../../../node_modules/rozaura/index.js"
import Card from "../../Components/Card/index.js"
import LeftBar from "../../Components/LeftBar/index.js"
import Title from "../../Components/Title/index.js"
import Message from "../Message/index.js"

export default ({title, setTitle}) => {

    return(
     BuildComponent({
        style: {
          
            flexDirection: 'row-reverse'
           
        },
        childElements: [
           
            BuildComponent({
            style: {
                padding: '30px',
                flex: 1,
                
            },
            childElements: [
                Title({text: varPrint("Página 2 😋"), }),
               
                Message({
                    Child:  BuildComponent({
                    type: "img",
                    attributes: {
                        src: useFile("public/logo.png")
                    },
                    style: {
                        width: "80px"
                    }
                }),})
            ]
            })
        ]
     })   
    )
}