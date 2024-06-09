export default (text = "", vararray = []) => { //função mapeadora de string com {}, para as variaveis correspondentes
    vararray.forEach(
    variable => {
        if(variable?.props === undefined)
            throw new Error("Erro a variável deve ser mapeável com props")
        if(variable.props?.index === undefined)
            throw new Error("Erro a variável deve ser mapeável com props.index")
        if(variable.props?.value === undefined)
            throw new Error("Erro a variável deve ser mapeável com props.value")
        let varindex = variable.props.index
        let varvalue = variable.props.value
        text = text.replace("{}",`<span class="updatable-${varindex}">${varvalue}</span>`)
    })
    return [text] //retorna um array porque se o leitor text do BuildComponent verificar que é um object, então, vai formatar com innerHTML
}   