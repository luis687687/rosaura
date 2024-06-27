import { replaceState } from "../../DoomState/index.js"

export default ({href}) => { //localiza os links de id, e altera o path actual, com o @
    var elementid = "@"+href.replace("#","").replace("@", "")
    var hash = location.hash
    var indexat = hash.indexOf("@")
    if( indexat != -1)//se já tem um @, remove tudo que já estava
        hash = hash.substring(0, indexat)
    var actualroute = hash.replace("#","/")+elementid
    replaceState({data:{},title:"",path:actualroute})
}