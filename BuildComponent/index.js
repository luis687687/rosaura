export default ({childElements = [], text, style = {}, events = {}, html, attributes = {}, type="div", ref = {}, css}) => { 
    var element
    element = document.createElement(type)
    ref.element = element
    if(! (text instanceof Array)) //se não for um array, então não quer formatar nada
        element.textContent = text
    else
        element.innerHTML = `<span>${text[0]}</span>` //na lógica, só pega o primeiro elemento a formatar
    elementAddChild(element, childElements) //adiciona filhos
    elementAddEvents(element, events) //adiciona events
    elementAddAtributes(element, attributes) //adiciona atributos
    elementPrepareStyleBinding(element, style) //torna o estilo bindável
    elementPrintStyleSheet({element, css})
    Object.assign(element.style, style) //poder subscrever estilo

    return element  
}
//add filhos
const elementAddChild = (element, childElements) => {
    childElements.forEach( (child, index) => { //adiciona os filhos
        element.appendChild(child)
    })
}
const elementAddEvents = (element, events) => {
    for(let key in events){ //adiciona os eventos
        
        element.addEventListener(
            key, eval("events."+key)
        )
    }
}
const elementAddAtributes = (element, attributes) => {
    for(let key in attributes){ //adiciona os atributos
        element.setAttribute(key, eval("attributes."+key))
    }
}

const elementPrepareStyleBinding = (element, style) => {
    for(let property in style){ //pode fazer bind no estilo ?
        if(style[property]?.props !== undefined) //confio que se o método tiver o props, então é uma variável de estado
        {
            const variable = style[property]?.props
            if(!element.classList.contains(config_rosaura_style_binding+variable.index)){
                element.classList.add(config_rosaura_style_binding+variable.index)
            }
            element.classList.add(property+"-bind")
            style[property] = variable.value
        }
    }
}

const elementPrintStyleSheet = ({element, css}) => {
    if(!css)
        return
    css.then(
        text => {
            const cssText = document.createElement("style")
            cssText.textContent = text;
            element.appendChild(cssText)
        }
    )
   
}