import varBindAreaElement from "../varBindAreaElement/index.js";
import varBindInvisibleClickedElementMonitorEvent from "../varBindInvisibleClickedElementMonitorEvent/index.js";
import varBindStyleElement from "../varBindStyleElement/index.js";
import varBindValueElement from "../varBindValueElement/index.js";

export default (initial) => {
    varStateIndex = var_state_list.length; //sempre que se criar uma variavel de estado, então, actualiza o index controller
    const object = { //esse objecto é importante, possui a referencia e o valor da variável, acupulados
        props : {
            index: varStateIndex,
            value: initial !== null ? initial : null,
            lastvalue: initial !== null ? initial : null,
        }}
    var_state_list.push(object)
    //objecto a mapear
    Object.defineProperty(object, "value", { //define a manipolação do valor da variável
        get(){return this.props.value; /*passa o valor do value dentro do props, importante por causa do valor inicial para o value global existir */},
        set(newValue){this.props={...this.props, value: newValue}; }
    } )
    //função mapeadora
    const updateValue = (nvalue) => { //método invocado externamente
        if(object.value == nvalue)
            return
        let v = object.value
        object.props.lastvalue = v
        object.value = nvalue //valor do objecto, essa acção é mapeada pelo set
        console.log(object.props)
        setTimeout(
            _ => {
                varBindAreaElement(object)
                varBindValueElement(object)
                varBindStyleElement(object)
                varBindInvisibleClickedElementMonitorEvent(object)
            }, 1
        )
        
    }
    
    return [object, updateValue]
   
}

