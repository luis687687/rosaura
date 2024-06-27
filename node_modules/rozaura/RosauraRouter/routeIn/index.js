//esta função prepara o evento event, a ser chamado no click invisivel quando a rota é aberta
export default (event = function(args){}, obj = {routerref}) => {
    const {routerref} = obj
    //cria um link invisivel, com funcao a ser chamada quando a rota a berta, isso é controlado no código das rotas
    createLinkToClickInRouteId(routerref, event)
}

//cria link para ser clicado, quando uma rota é aberta
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