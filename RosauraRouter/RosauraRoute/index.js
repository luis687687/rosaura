import Page1 from "../../../Components/Page1/index.js"
import Page2 from "../../../Components/Page2/index.js"
import Page3 from "../../../Components/Page3/index.js"
import defVariable from "../../DataBind/defVariable/index.js"


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
    console.log(obj, " arra ")
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
