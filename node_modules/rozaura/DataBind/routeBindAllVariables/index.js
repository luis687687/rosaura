import varBindAreaElement from "../varBindAreaElement/index.js"
import varBindInvisibleClickedElementMonitorEvent from "../varBindInvisibleClickedElementMonitorEvent/index.js"
import varBindStyleElement from "../varBindStyleElement/index.js"
import varBindValueElement from "../varBindValueElement/index.js"
///essa função faz um binding no vector de variável de estado, será útil no controle de variáveis de estado partilhada entre diferentes rotas
//será chamada sempre que se mudar de rota
export default () => {
    var_state_list.forEach( var_state => {
        varBindAreaElement(var_state)
        varBindStyleElement(var_state)
        varBindValueElement(var_state)
        varBindInvisibleClickedElementMonitorEvent(var_state)
    })
}