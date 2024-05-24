import BuildComponent from "../modules/BuildComponent/index.js";
import BuildRootComponent from "../modules/BuildRootComponent/index.js";



function app(){

    
    BuildRootComponent(
        BuildComponent(
            {
                text: "Teste de componente",
                childElements: [
                    BuildComponent({
                        style: {
                            width: '200px',
                            height: '200px',
                            backgroundColor: 'blue'
                        }
                    })
                ]
            }
    ))
}


app()