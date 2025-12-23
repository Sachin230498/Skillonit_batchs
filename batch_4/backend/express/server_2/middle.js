const middleware = (req,res,next)=>{
let data = req.headers.authorization;
  
  
if(data ==123456 ){
        next()
    }else{
     res.send("data not true")
    }
  
}

export default middleware