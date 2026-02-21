import productModel from "../models/Productmodel.js";


const createProduct = async(req,res)=>{
const product = new productModel(req.body)
const saved = await product.save()
res.json({massage:"Product saved",data:saved})
}


const GetProduct = async(req,res)=>{
   const products = await productModel.find();
   res.json(products)
}


const updateProduct = async (req, res) => {
  const updateProduct = await productModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  )

  res.json(updateProduct)
 
};


const deleteProduct = async (req, res) => {
  const updateProduct = await productModel.findByIdAndDelete(
    req.params.id);

  res.json({massage:"product delete",updateProduct});
};





export { createProduct, GetProduct,updateProduct,deleteProduct };