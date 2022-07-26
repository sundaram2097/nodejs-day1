const http = require('http')
const fs= require('fs');
const PORT = 5000;
const name= "meenakshisundaram"

const server = http.createServer((req,res)=>{
    fs.writeFile("data-time.txt",('this is written by node js throught port 5000 hello i am meenakshisundaram '),(err)=>{
        if(err)
        console.log(err)
    })
    fs.readFile("data-time.txt",(err,data)=>{
        if(err)
        console.log(err)
        else{
            res.writeHead(200,{'content-type':'application/txt'});
            res.end(data)
        }
    })
})
server.listen(PORT,()=>console.log(`server is listening port: ${PORT}`))