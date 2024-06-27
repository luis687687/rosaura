import BuildComponent from "../BuildComponent/index.js"
import defVariable from "../DataBind/defVariable/index.js"
import routeBindAllVariables from "../DataBind/routeBindAllVariables/index.js"
import varMonitor from "../DataBind/varMonitor/index.js"
import { replaceState } from "../DoomState/index.js"
import altereLinkToId from "./altereLinkToId/index.js"


const [canPutHistoryState, setCanPutHistoryState] = defVariable(0) //controlador de estado para mundança da url
//essa função cria rotas
export default (props = {active, routes:[{path, element}]}) => {

    
    const {routes, active} = props //atributos esperados
    //console.log(routes, " aqui")
    const [routeState, setRouteState] = defVariable(active) //variável de estado que controla a mudança de rotas
    const [paramsController, setParamsController] = defVariable("")
    activeRouteOneTimeTosetFatherElement({routes, routeState, setRouteState}) //a primeira chamada!
    //aproveitei o uso do varMonitor, para monitorar mudança de rota
    routeStateMonitor({routes, routeState, setRouteState, setParamsController})
    routeParamsMonitor({paramsController})
    changeURLMonitor({routeState})    
    return(
        RouteComponent(routeState)   
    )
}




//actualiza a url
const changeURLMonitor = ({routeState}) => {
    varMonitor( _=> {
        var pathname = routeState.route.path+routeState.route.params //é melhor usar o route.path para pegar o valor, do que routeState.value, devido a primeira requisão manual do browser, em que routeState não terá value
        //console.log("set ", history_actual_route_index)
        replaceState({data:{index: history_actual_route_index, pathname, value:  routeState.route.path},title:"",path:pathname}) //altera o path na url    
    }, [canPutHistoryState])
}



//munitore routeState para actualizar a mudança de rota
const routeStateMonitor = ({routes, routeState, setRouteState, setParamsController}) => {
    var is_the_first_open = true
    var last_route = ""
    varMonitor( e => {
        setActiveRoute({routes, routeState}) //em função do valor do routeState, ela chama o elemento do routes list
        altereDefaultLinksToOpenRoute({routes, routeState, setRouteState}) //Altera o comportamento padrão dos links, e manipula o setRouteState
        altereAllLinksToId()
        setParamsController(routeState.route.params)
        //console.log("Mudou de rota!")
        if(!is_the_first_open){ //se não é a primeira chamada
            callLinkToLeaveRoute({routes, last_route}) //então quer mudar de rota
            browserButtonEvent({routes, last_route, setRouteState})
        }
     
        callLinkToInRoute({routes, actual_route:routeState.value})
        
        last_route = routeState.value //seta o valor da última rota
        is_the_first_open = false //garante que a seleccão da rota aconteça só nas chamadas de mundaça de rota
    }, [routeState])
}



//sempre que muda de rota, verifica a ultima rota aberta e clica no link oculto, preparado pela função de monitoramento de rotas dechadas
const callLinkToLeaveRoute = ({routes, last_route}) => {
    routes.forEach( (route, id) => {
        var last_rout = last_route === undefined ? history.state.value : last_route
        if(route.path == last_rout){
           document.querySelector("."+config_link_to_click_leave_one_route+id)?.click()
        }
    })
}


//sempre que muda de rota, verifica a rota aberta e clica no link oculto, preparado pela função de monitoramente de rotas abertas
const callLinkToInRoute = ({routes, actual_route}) => {
    routes.forEach( (route, id) => {
        var actual_rout = actual_route === undefined ? history.state.value : actual_route
        if(route.path == actual_rout){
           document.querySelector("."+config_link_to_click_enter_one_route+id)?.click()
        }
    })
}




//Monitora a munda nos parametros das rotas
const routeParamsMonitor = ({paramsController}) => {
    varMonitor( e => {           
            linkParamsMonitorClick()
    }, [paramsController])
}



//clica em links, que contem funcoes de monitorar parametros em outros arquivos
//esses links serão gerados por uma função de monitoramento de parámetros
const linkParamsMonitorClick = () => {
    document.querySelectorAll("."+config_rosaura_monitore_params)?.forEach(
        link => {
            link.click()
        }
    )
}




//usado quando o browser fazer requisição pela primeira vez, no controle de rotas!
const activeRouteOneTimeTosetFatherElement = ({routes, routeState, setRouteState}) => {
    var hash = location.hash.replace("#", "/")
    var tagarea = null
    if(hash){
        let ind = hash.indexOf("@")
        if(ind != -1){
            tagarea = hash.substring(ind)
            hash = hash.replace(tagarea, "")
            firstScrollLink(tagarea)  
        }
        routeState.value = hash //update url persistence
        routeState.route = {params:""}
        setActiveRoute({routes, routeState, setRouteState}) //activa rota, uma vez
    }
    else setActiveRoute({routes, routeState, setRouteState}) //activa rota, uma vez
    setCanPutHistoryState(canPutHistoryState.value+1)
}





//cria um link que faz o scroll no elemento, cujo id está na url depois de @
//é usado dentro da função chamada na primeira requisição do browser
const firstScrollLink = (tagarea) => {
    var link = document.createElement("a")
    var href = tagarea.replace("@", "#")
    link.setAttribute("href", href)
    link.onclick = _=> (altereLinkToId({href}))
    setTimeout(() => { //essa pausa é importante para o link
        link.click()
    }, 500);
}





//cria component pai de rotas
const RouteComponent = (routeState) => { //routeState é só usado uma vez na inicialização!
    return(
        BuildComponent(
            {
                attributes: {
                    id: "rosaura_framework_route" //id de controle
                },
                childElements: [
                    routeState.route.element //as rotas são filhas do elmento com id de controle
                ]   
            }
        )
    )
}



//activa rota, varrendo o array de rotas e setando a rota ideial na variável de estado
const setActiveRoute = ({routes, routeState}) => { //
    var has_route = {value:false}
    routes.forEach((route) => { //setar a rota activa
            putIfHasParams({routeState, actualPath:routeState.value})
            putFoundRoute({routeState, has_route, path: route.path, route})
    })
    //para caso de nao ser a primeira chamada da função
    const route_element_area = document.querySelector("#rosaura_framework_route") //pega sempre a rota pai
    if(!has_route.value) hasNotRoute(routeState, routes)
    if(!route_element_area) return //o elemento pai ainda não existe
    printRouteOnParent({route_element_area, routeState})
}



//coloca a rota no elemento pai
const printRouteOnParent = ({route_element_area, routeState}) => {
    route_element_area.innerHTML = ""
    route_element_area.appendChild(routeState.route.element)
    if(routeState.props.lastvalue !== undefined)
        if(location.hash != routeState.route.path+routeState.route.params) //se mudou de rota
            routeBindAllVariables() //binda todas as variaveis partilhadas
}



//verifica se o valor da rota escolhido existe e seta na variável
const putFoundRoute = ({routeState, has_route, path, route}) => {
    if(routeState.value == path){
        routeState.route = route
        routeState.route.params = config_params_string
        has_route.value = true
    }
}



//verifica se tem parámetros
const putIfHasParams = ({actualPath, routeState}) => {
    if(actualPath && actualPath.indexOf("?") != -1){
        config_params_string = actualPath.substring(actualPath.indexOf("?"))
        routeState.value = (actualPath.replace(config_params_string, ""))
        routeState.props.lastvalue = routeState.value
        
    }
}




//se não for setado nenhum default, e nenhum notfoundRoute
const hasNotRoute = (routeState, routes) => {
    if(routeState.value == undefined) routeState.route = {...routes[0], params: ""};
    else{
        routeState.route = {path: routeState.value, element: document.createElement("div"), params: ""}
        routeState.route.element.innerHTML = "<h1>Rota: "+routeState.value+" não existe</h1>"    
    }    
}





//altera o funcionamento padrão dos links
const altereDefaultLinksToOpenRoute = ({setRouteState}) => {
    const links = document.querySelectorAll("a")
    links.forEach( link => {
        const href = link.getAttribute("href")
        if(!href) return //impedi que chame os links invisivel infinitas vezes, caso nao tem 
        if((href[0] == "/" || href[0] == "\\" || href.indexOf("http:") == -1)) //é roteável
        {
            link.onclick = (linkEvent)=> {
                linkEvent.preventDefault()
                config_params_string = "" //reseta a string universal de parametros
                setRouteState(href)
                setCanPutHistoryState(canPutHistoryState.value+1)
                //console.log(history_routes)
            }
        }
    })
}





//altera o comportamento padrão de todos os links de id reference
const altereAllLinksToId = () => {
    const links = document.querySelectorAll("a") //melhor que getElementsByTagName
    links.forEach( link => {
        var href = link.getAttribute("href")
        if(!href) return;
        if(href[0] == "#" || href[0] == "@"){
            link.setAttribute("href",href.replace("@", "#"))
            link.onclick = (event) => {
                altereLinkToId({href})
            }
        }
    })
}




//controla o evento de back do browser
const browserButtonEvent = ({routes, last_route, setRouteState}) => {
    window.addEventListener("popstate", (event) => {
       const pathname = event.state?.pathname
       if(pathname)
       gotoLocation({pathname, setRouteState})
    }) 
}




//cria um botao recebendo a rota para actualizar no setRouteState
const gotoLocation = ({pathname, setRouteState}) => {
    var btncontroller = document.createElement("div")  
    btncontroller.addEventListener("click", _=> {
        setRouteState(pathname) 
    })
    btncontroller.click()
}


