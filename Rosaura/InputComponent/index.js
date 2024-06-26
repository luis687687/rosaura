import BuildComponent from "../BuildComponent/index.js"

export default ({childElements = [], type="text", name="", style = {}, events = {}, attributes = {},value = "", onChange}) => {
    

    const element = BuildComponent({childElements, style, type:"input", //reaproveita o BuildComponent, para cria a input
        events: {
            ...events,
            keypress: _ => { //se inserir uma nova tecla
                const {key} = _
                const concate = key.toLowerCase() != "enter" ? key : "" //excepto o enter
                onChange(_.target.value+concate) //actualiza na função
            },
            keyup: _ => { //para controlar o backspace
                const {key} = _
                if(key.toLowerCase() == "backspace") //se a tecla largada for o backspace
                    onChange(_.target.value) //actualiza também
            }
        },
        attributes: {
            type,
            name,
            ...attributes,
            value: value?.value !== undefined ? value.value : value,
             
        },
    
    })
    element.classList.add(config_rosaura_input_bind+(value?.props !== undefined ? value.props?.index !== undefined ?  value.props.index : "" : "")) //torna a input com o valor bindable

    return element
}