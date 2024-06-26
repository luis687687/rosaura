import http from http


const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-type","text/html")
    require("fs").createReadStream("./index.html").pipe( res )
})

server.listen(5000, () => {
    console.log("listen")
})