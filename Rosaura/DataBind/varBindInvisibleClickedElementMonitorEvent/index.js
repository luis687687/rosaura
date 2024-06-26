//clica em todos os links, monitoradores de estado da variável, chamadores de função do programador
export default variable => {
    if(variable.value == variable.props.lastvalue) //impede a chamado caso o valor não tenha sido trocado
        return
    variable.props.lastvalue = variable.value //garante que não aja mais cliques que 1
    var invisibleclass = "."+config_rosaura_monitore_event+variable.props.index; //pega a class dos elementos invisíveis
    var elements = document.querySelectorAll(invisibleclass)
    elements.forEach( element => {
        element.click()
    })
}