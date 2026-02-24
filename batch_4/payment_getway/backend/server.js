import express from "express";
import Razorpay from "razorpay";
import cors from "cors"


const app = express()
app.use(cors())
app.use(express.json())


// rzp_test_SJwYmQzEjTB42M;
// sfao9Bsv3ge2T4CTnrYG9GGd

// Create razorpay instance

const razorpay = new Razorpay({
  key_id: "rzp_test_SJwYmQzEjTB42M",
  key_secret: "sfao9Bsv3ge2T4CTnrYG9GGd",
});

// Create order api
app.post("/create-order",async(req,res)=>{
const options = {
    amount:req.body.amount*100,
    currency:"INR"
};
const order = await razorpay.orders.create(options)
res.send(order)
})

// Razorpay uses paise
// 500 => 50000


app.listen(4000,()=>{
    console.log(`server is running on http://localhost:4000`)
})