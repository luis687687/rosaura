//essa função busca por um arquivo de estilo index.css, na pasta file a mesma que a pagina js, e pega o texto
export default async file => {
    var local = "./components/" + file+"/index.css"
    const response = await fetch(local)
    return await response.text() //o texto é usado pelo atributo css do argumento da função BuildComponent
}