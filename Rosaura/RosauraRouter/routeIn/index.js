//cria um link invisivel, com funcao a ser chamada quando a rota a berta, isso é controlado no código das rotas
export default (event = function(args){}, {routerref}) => {
    createLinkToClickInRouteId(routerref, event)
}

//cria link para ser clicado, quando uma rota é a bandonada
//esse link é clicado no código de controle de rotas
const createLinkToClickInRouteId = (routerref, event) => {
    const link = document.createElement("a")
    link.classList.add(config_link_to_click_enter_one_route+routerref)
    link.setAttribute("hidden","true")
    link.onclick = function(linkevent){
        linkevent.preventDefault()
        event(routerref)
    }
    document.body.appendChild(link)
}