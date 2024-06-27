//monitora eventos, em função de um link dinamicamente clicado
export default (event=function(){}, params=[]) => {
    //params contém as variáveis de estado a munitorar
    setTimeout( _=>event(), 1)
    
    var indexlist = []; //lista de indeces já usados nesse controle de estado!
    params.forEach( (var_controller) => {
        if((var_controller?.props == undefined || var_controller.props?.index === undefined)) //verifica se é mems
            throw "Erro essa variável não é de estado";
        const {index} = var_controller.props
        if(index == 4)
            //console.log(var_state_list[index], " e ")
        if(indexlist.indexOf(index) != -1) //se a variável de estado está repetindo
            return; // não avança, desnecessáriamente
        indexlist.push(event)
        createInvisibleLink(index, event)
    })
}


//cria link invisivel para ser sempre apertado, quando a variavel de estado mudar e ajudar no varMonitor a chamar as funções
const createInvisibleLink = (index, event=()=>{}) => { //indece da variavel de estado e evento a ser usando no onclick
    var linkcontroller = document.createElement("a")
    linkcontroller.classList.add(config_rosaura_monitore_event+index)
    linkcontroller.setAttribute("hidden", "true")
    linkcontroller.innerHTML = "Luis"
    linkcontroller.addEventListener("click", (elementevent) => {
        elementevent.preventDefault()
        // //console.log(var_state_list)
        // if(var_state_list[index].props.lastvalue != var_state_list[index].value)
            event();
    })
    document.body.appendChild(linkcontroller);
}