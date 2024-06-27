import BuildComponent from "../../node_modules/rozaura/BuildComponent/index.js"
import defVariable from "../../node_modules/rozaura/DataBind/defVariable/index.js"
import varMonitor from "../../node_modules/rozaura/DataBind/varMonitor/index.js"
import varPrint from "../../node_modules/rozaura/DataBind/varPrint/index.js"
import useCss from "../../node_modules/rozaura/useCss/index.js"



export default (props = {}) => {
    
    useCss("teste")
    const {value, setValue, index, texto} = props
    const [text, setText] = defVariable(texto)
    const [element, setElement] = defVariable()
    
    
    // varMonitor(function(e){    

    //     element.element.style.backgroundColor = index == value.value ? "green" : 'red'
    //     setText(index == value.value ? "Activado" : "Desactivado")
    // }, [value])
    return(BuildComponent(
            {
                text: varPrint("{}", [text]),
                style: {
                    cursor: "pointer",
                    width: "fit-content",
                    marginTop: '40px',
                    minWidth: '200px',
                    padding: '20px',
                   
                    boxSizing: 'border-box'
                },
                attributes: {
                    class: "teste"
                },
                ref:element,
                events: {
                    click: _=> {
                        setValue(index)
                    }
                }
            }
        )
    )
}