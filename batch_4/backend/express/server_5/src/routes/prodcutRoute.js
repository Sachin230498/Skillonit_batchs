import express from "express";
import { getProduct, postProduct } from "../controllers/productcontroller.js";
import loginverify from "../middleware/auth.middle.js";
import checkrole from "../middleware/role.middleware.js";
import productupload from "../middleware/productUpload.middleware.js";

const productrouter = express.Router();

productrouter.get("/getdata", getProduct);
productrouter.post("/postdata", productupload.array("images", 3), postProduct);

export default productrouter;
