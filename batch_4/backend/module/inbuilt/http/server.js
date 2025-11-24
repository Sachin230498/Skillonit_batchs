import http from "http"

const server = http.createServer((req,res)=>{
  if(req.url === "/"){
 res.end("hello")
  }else if(req.url == "/data"){
    res.end("Data is getting")
  }else if(req.url == "/about"){
    res.end("About page")
  }else{
    res.end("404 not found")
  }
})


server.listen(4000,()=>{
    console.log(`server is running http://localhost:${4000}`)
})