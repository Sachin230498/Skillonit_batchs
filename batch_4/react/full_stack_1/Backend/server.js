import express, { json } from "express";
import cors from "cors";
import data from "./data.js"

const app = express();
app.use(cors());
app.use(express.json())
const PORT = 4000

// console.log(data)

// Read - All Courses
app.get("/api/courses",(req,res)=>{
    res.json(data)
})

// Read Single Course
app.get("/api/courses/:id", (req, res) => {
  const course = data.find(c=>c.id == req.params.id)
  res.json(course);
});

// Create course
app.post("/api/courses", (req,res)=>{
    const newCourse = {
      id: Date.now(),
      title: req.body.title,
      description: req.body.description,
      price:req.body.price
    };

    data.push(newCourse)
    res.json(newCourse)
})


// Update
app.put("/api/courses/:id", (req, res) => {
  let updata = data.map(course=>course.id == req.params.id ?
    {...course, ...req.body}:course
   )

res.json({message:"Course Updated"})
  
});







app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})