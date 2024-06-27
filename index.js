

import Rosaura from "./node_modules/rozaura/index.js"; //Rosaura é o objecto geral que gerencia o framework
import app from "./app.js"; //app é a função que rotorna o componente a ser mostrado no root element

//função principal a ser chamada
//usa a função que referencia o root elemente, e atribui o elemento dentro 
const main =function(){
    Rosaura.BuildRootComponent(app()) //Instancia o root
}
main() //chamada damain

