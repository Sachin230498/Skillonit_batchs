import express from  "express"
import  {createProduct,GetData,updateProduct,deleteProduct} from "../controller/productcontroller.js"
import authMiddleware from "../middleware/authmiddleware.js";

const ProductRouter =  express.Router();


ProductRouter.post("/",authMiddleware, createProduct)
ProductRouter.get("/",authMiddleware,  GetData)
ProductRouter.put("/:id",updateProduct)
ProductRouter.delete("/:id",deleteProduct)

export default ProductRouter;