import BuildComponent from "../BuildComponent/index.js";

//component de input com o funcionamento do target mudificado!
export default ({childElements = [], text, action = "", method="get", style = {}, events = {}, html, attributes = {}, ref = {}, css}) => {
    return(
        BuildComponent({
            type: "form",
            attributes: {

                ...attributes,
                action,
                method,
            },
            events: {
                ...events,
                submit: _ => { //recoloca os valores de parámetro no final da hash
                    _.preventDefault();
                    if(_.target.method.toLowerCase() == "post" || _.target.action.indexOf("#") == -1)
                        return _.target.submit();
                    var str = "?"
                    for(var input of _.target.querySelectorAll("input")){
                        if(str != "?")
                            str += "&"
                        str += input.name+"="+input.value
                    }
                    _.target.action+=str
                   _.target.submit()
                }

            },
            childElements,
            text,
            style,
            ref,
            css
        })
    )
}