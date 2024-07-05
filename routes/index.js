import Rosaura from "../rosaura/rozaura/index.js"
import Page1 from "../src/Pages/Page1/index.js"
import Page2 from "../src/Pages/Page2/index.js"

export default () => {

    const [title, setTitle] = Rosaura.defVariable("")
    return (
        //O gerenciador de rotas
        Rosaura.RosauraRouter (
            //Instanciador de rotas, em array, e indexador de ids
            Rosaura.RosauraRoute(
                {
                    routes: [
                        {element: Page1, path: "/page1", attributes: {}},
                        {element: Page2, path: "/page2", attributes: {}}
                    ]
                }
            )

        )        
    )
}