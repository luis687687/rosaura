export default (event = function(args){}, {routerref}) => {
    createLinkToClickLeaveRouteId(routerref, event)
}

//cria link para ser clicado, quando uma rota é a bandonada
//esse link é clicado no código de controle de rotas
const createLinkToClickLeaveRouteId = (routerref, event) => {
    const link = document.createElement("a")
    link.classList.add(config_link_to_click_leave_one_route+routerref)
    link.setAttribute("hidden","true")
    link.onclick = function(linkevent){
        linkevent.preventDefault()
        event(routerref)
    }
    document.body.appendChild(link)
}