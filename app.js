

import Control from "./Components/Control/index.js";
import Teste from "./Components/Teste.js";
import BuildComponent from "./modules/BuildComponent/index.js";
import BuildRootComponent from "./modules/BuildRootComponent/index.js";
import defVariable from "./modules/DataBind/defVariable/index.js";
import varPrint from "./modules/DataBind/varPrint/index.js";
import InputComponent from "./modules/InputComponent/index.js";
import Rosaura from "./modules/Rosaura/index.js";
import varController from "./modules/varController/index.js";

function app(){

    const [a, setA] = defVariable("red")
    const [c, setC] = defVariable(2)
    
    const element =  
        BuildComponent(
            {
                text: varPrint("{} Luis Marques {} e também {} com {}", [a, c, a]),
                style: {
                    textAlign: "center",
                    padding: "20px",
                    color: a,
                    fontSize:'30px',
                    fontFamily: 'sans-serif',
                    display: 'flex',
                    flexDirection: 'column'
                },
                childElements: [
                    InputComponent({
                        onChange: e => {
                            setA(e)
                        },
                        value: a
                       

                    }),
                    InputComponent({
                       value: a
                    }),
                    BuildComponent({
                        style: {
                            width: "200px",

                            height: "200px",
                            backgroundColor: a
                        }
                    }),
                   BuildComponent( {
                    style: {
                        display: "flex",
                        gap: "30px"
                    },
                    childElements: [
                        Teste({index:0}),
                        Control({
                            setControl: setC
                        })
                    ]
                   })
                ]  
            }
        )
   
   
    
        BuildRootComponent(
           element
        )
     
    
  
   
}


app()