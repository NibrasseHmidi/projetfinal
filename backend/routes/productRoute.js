const express = require("express");
const productrouter = express.Router();
const isAuth = require('../middlewares/passport')
const { ajoutProduct, upload,getProductById,GetAllProduct,GetDetailsProduct} = require("../controllers/productcontrollers");
/**
 * @param POST /ajout
 * @description ajoute une annonce
 * @access PRIVATE
 */
productrouter.post("/add", upload.single('pic'),isAuth(), ajoutProduct);
productrouter.get("/myproduct",isAuth(),getProductById)
productrouter.get("/allproduct",GetAllProduct)
productrouter.get("/:id",isAuth(), GetDetailsProduct)

module.exports = productrouter;