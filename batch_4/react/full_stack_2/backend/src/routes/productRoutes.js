import { createProduct, deleteProduct, GetProduct, updateProduct } from "../controller/ProductController.js";
import express from "express"

const productRouter = express.Router()

productRouter.post("/create",createProduct)
productRouter.get("/get",GetProduct)
productRouter.put("/update/:id",updateProduct)
productRouter.delete("/delete/:id",deleteProduct)

export default productRouter