
export default (element) => {
    const rootElement = document.getElementById("root")
    const stylearea = document.createElement("div")
    stylearea.setAttribute("id", "rousara_intarnal_style")
    if(rootElement){
        rootElement.appendChild(element)
    }
    document.body.appendChild(stylearea)
}



