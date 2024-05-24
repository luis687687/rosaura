export default ({childElements = [], text, style = {}, events = [], attributes = []}) => {

    const element = document.createElement("div")
    Object.assign(element.style, style)
    console.log(element.style)

    element.textContent = text
    childElements.forEach( (child, index) => {
        element.appendChild(child)
    })

    return element
    
}