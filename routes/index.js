import { RosauraRouter, defVariable } from "../node_modules/rozaura/index.js"
import Page1 from "../Components/Page1/index.js"
import Page2 from "../Components/Page2/index.js"
import Page3 from "../Components/Page3/index.js"
import RosauraRoute from "../node_modules/rozaura/RosauraRouter/RosauraRoute/index.js"

export default props => {

    const [v, setV] = defVariable(0)
    return(
        RosauraRouter(
            RosauraRoute(
                {
                
                   routes: [ 
                    {
                        element: Page1,
                        path: "/",
                        attributes: {
                            v,setV
                        },
                    },
                    {
                        element: Page2,
                        attributes: {v,setV},
                        path: "/ana/teste/marques"
                    },
                    {
                        element: Page3,
                        attributes: {v,setV},
                        path: "/page3"
                    }
                    ]
                }
            )
        )
    )
}


