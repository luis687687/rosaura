//esta função, chama os componentes da rota, passando os seus argumentos dentro de attributes, no formato de atributos de um objecto
//este objecto é enviado como argumento do componente
//cria um atributo importante que é o routerref, usado para referenciar rotas
//routerref é usado por funções que controlam, quando a rota é aberta routeIn e quando é fechada routeLeave
export default ({active , routes = [ {element:"", path: "", attributes: {}} ]}) => {
    const route_array = routes.map( (route, index) => {
        const {element, path, attributes} = route
        return ({
            //routerref é um atributo importante, usado para monitorar uma rota especifica pelo seu id de referencia no array de rotas
            //esse monitoramento é feito a nivel do generenciador de rotas RosauraRouter
            element: element({...attributes, routerref: index}),
            id: index,
            path
        })
        
    })
    const obj = {active, routes: route_array}
    return obj
}

// {
           
//     routes:[
//         {
//             element: Page1({v, setV}),
//             path: "/"
//         },
//         {
//             element: Page2({v, setV}),
//             path: "/ana/teste/marques"
//         },
//         {
//             element: Page3({v, setV}),
//             path: "/page3"
//         }
// ]}
