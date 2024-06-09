const css = useCss("index.css")
export default ({childElements = [], text, style = {}, events = {}, attributes = {}, type="div", onChange}) => { 
    
    const element = document.createElement(type)
    
    if(! (text instanceof Array)) //se não for um array, então não quer formatar nada
        element.textContent = text
    else
        element.innerHTML = `<span>${text[0]}</span>` //na lógica, só pega o primeiro elemento a formatar
    
    childElements.forEach( (child, index) => { //adiciona os filhos
        element.appendChild(child)
    })

    for(let key in events){ //adiciona os eventos
        element.addEventListener(
            key, eval("events."+key)
        )
    }
    for(let key in attributes){ //adiciona os atributos
        element.setAttribute(key, eval("attributes."+key))
    }

    for(let property in style){ //pode fazer bind no estilo ?
        if(style[property]?.props !== undefined) //confio que se o método tiver o props, então é uma variável de estado
        {
            const variable = style[property]?.props
            if(!element.classList.contains("style-bind-"+variable.index)){
                element.classList.add("style-bind-"+variable.index)
            }
            element.classList.add(property+"-bind")
            style[property] = variable.value
        }
    }


    Object.assign(element.style, style) //poder aubscrever estilo
    
    return element
    
}