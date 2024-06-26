//chama a função definida pelo programador sempre que o lin de monitoramento de parametros for apertado
//esse link é apertado no código das rotas
export default (event = function(params){}) => {
    const link = document.createElement("a")
    link.classList.add(config_rosaura_monitore_params)
    link.onclick = _=>{
        _.preventDefault()
        let obj = transformeParamsToObj()
        event(obj)
    }
    document.body.appendChild(link)
}

//Transforma a string de parametros em um objecto
const transformeParamsToObj = _ => {
    var params = config_params_string
    params = params.replace("?","")
    params = params.split(/&/)
    var obj = {}
    for(var p of params){
        if(p.indexOf("=") != -1){
            let right = p.substring(p.indexOf("=")+1)
            let left = p.replace("="+right, "")
            obj[left] = right
        }
    }
    return obj //é reaproveitado no parámetro da função do programador, dando acesso aos atributos e valores dos parametros da url
}