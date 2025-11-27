import express from "express"
import fs from "fs"

const app = express()
let PORT = 3050

// middleware to parse json body
app.use(express.json())


// crud
// create => POST request
// read  => get request
// Update => put/patch request
// delete => delete request

app.get("/getdata",(req,res)=>{
  fs.readFile("data.json","utf-8", (err,data)=>{
    if(err) res.send(err)
    else    res.send(JSON.parse( data))
  })
})


app.post("/postdata",(req,res)=>{
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) res.send(err);
    let jsondata = JSON.parse(data);
    jsondata.users.push(req.body);
    fs.writeFile("data.json",JSON.stringify(jsondata),(err,data)=>{
      if(err) res.send(err)
      else res.send("data posted done")
    } )
  });

//  let x = req.body;
  
})


  app.get("/abc/:id", (req, res) => {
    res.send(id);
  });



app.get("/",(req,res)=>{
    res.send("hello , welcome to our server")
})

app.listen(PORT,()=>{
    console.log(`server is running http://localhost:${PORT}`)
})