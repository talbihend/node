

const http = require("http");
// const host = "localhost";
const port = 3000;




const requestListener = function(req, res) {
    res.writeHead(200);
    res.end("Hello Node!!!!");
    
    res.send("<html><body><h1>Hello Node!!!!</h1></body></html>");
}


const server = http.createServer(requestListener);
server.listen(port,  () => {
   console.log(`Server is running on PORT${port}`);
});