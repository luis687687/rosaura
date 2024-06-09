import BuildComponent from "../modules/BuildComponent/index.js"
import defVariable from "../modules/DataBind/defVariable/index.js"
import varPrint from "../modules/DataBind/varPrint/index.js"
import useCss from "../modules/useCss/index.js"
import varController from "../modules/varController/index.js"


export default (props) => {
    
    const [state, setState] = defVariable("sw!")
    
    return(BuildComponent(
            {
                text: varPrint("{}", [state]),
                style: {
                    cursor: "pointer",
                    
                    
                },
                events: {
                    click: _=> {
                        setState("Clicaste-me")
                    }
                }
            }
        )
    )
}