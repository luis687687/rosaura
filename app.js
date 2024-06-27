import routes from "./routes/index.js"; //pega o valor retornado do gereneciador de rotas
import {BuildComponent} from "./node_modules/rozaura/index.js"
//função chamda dentro da index.js, retorna component
export default function(){
    return routes() //retorna o valor do gerenciador de rotas
}
