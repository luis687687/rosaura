import useCss from "../useCss/index.js"



export default ({childElements = [], text, style = {}, events = {}, attributes = {}, type="div", onChange}) => { 
    //console.log(location)
    const element = document.createElement(type)
    if(! (text instanceof Array)) //se não for um array, então não quer formatar nada
        element.textContent = text
    else
        element.innerHTML = `<span>${text[0]}</span>` //na lógica, só pega o primeiro elemento a formatar

    elementAddChild(element, childElements)
    elementAddEvents(element, events)
    elementAddAtributes(element, attributes)
    elementPrepareStyleBinding(element, style)

    Object.assign(element.style, style) //poder subscrever estilo
    printStyle() //escreve o estilo na tela
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
            if(!element.classList.contains("style-bind-"+variable.index)){
                element.classList.add("style-bind-"+variable.index)
            }
            element.classList.add(property+"-bind")
            style[property] = variable.value
        }
    }
}

const printStyle = () => { //responsável por imprimir o estilo do component no html index
    const css = useCss("index.css")
    css.then( text => {
        let style = document.head.querySelector("style")
        if(!style){
            style = document.createElement("style")
            document.head.appendChild(style)
        }
        const l = style.textContent.trim().toLowerCase()
        const t = text.trim().toLowerCase()
        if(l.indexOf(t) == -1)
            style.textContent += t
    })
}