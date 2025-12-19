import Productmodel from "../models/Productmodel.js";

// Create product
const createProduct =  async (req, res) => {
  const { name, price, mobile } = req.body;
  const product = await Productmodel.create({ name, price, mobile });
  res.send("product added");
};

const GetData = async (req, res) => {
  const products = await Productmodel.find();
  res.send(products);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const products = await Productmodel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.send(products);
};

const deleteProduct =  async (req, res) => {
  const { id } = req.params;
  const products = await Productmodel.findByIdAndDelete(id);
  res.json({ message: "Deleted", products });
};

export {createProduct,GetData,updateProduct,deleteProduct}