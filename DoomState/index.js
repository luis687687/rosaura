export const replaceState = ({data,title,path}) => {
    //importante esperar 1 milissegundo para os assets pegarem a referencia
    path = path.replace("/","#")
    path = path.replace("\\","#")
    var pathname = (location.pathname)+path
    setTimeout(_=>history.pushState(data, title, pathname),1)
}
export const pushState = ({data,title,path}) => {
    //importante esperar 1 milissegundo para os assets pegarem a referenci
    path = path.replace("/","#")
    path = path.replace("\\","#")
    console.log(data)
    var pathname = (location.pathname)+path
    setTimeout(_=>history.pushState(data, title, pathname),1)
}

