const http = require("http");
const fs = require('fs');
const myServer = http.createServer(
    (req, res)=>{
        if(req.url === '/favicon.ico'){
            return res.end()
        }
        console.log('Req received');
        const log = `${new Date()}: New Req received\n`;
        fs.appendFile("log.txt", log, (err, data)=>{
          switch(req.url){
          case "/":
          res.end('Homepage');
          break;
          case "/about":
            res.end("I am about page");
            break;
            default :
            res.end("404 not found")

          }
        })
    }
)

myServer.listen(8000, ()=>{
    console.log('server started');
})