const express = require("express");
const productrouter = express.Router();
const isAuth = require('../middlewares/passport')
const { ajoutProduct, upload,getProductById,GetAllProduct,GetDetailsProduct,UpdateProduct,DeleteProduct} = require("../controllers/productcontrollers");
/**
 * @param POST /ajout
 * @description ajoute une annonce
 * @access PRIVATE
 */
productrouter.post("/add", upload.single('pic'),isAuth(), ajoutProduct);
productrouter.get("/myproduct",isAuth(),getProductById)
productrouter.get("/allproduct",GetAllProduct)
productrouter.get("/:id",isAuth(), GetDetailsProduct)
productrouter.put("/:id",isAuth(),UpdateProduct)
productrouter.delete("/:id",isAuth(),DeleteProduct)


module.exports = productrouter;