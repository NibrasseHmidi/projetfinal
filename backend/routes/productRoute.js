const express = require("express");
const productrouter = express.Router();
const isAuth = require('../middlewares/passport')

const validation = require("../middlewares/validation")
const { ajoutProduct, upload,getProductById,GetAllProduct} = require("../controllers/productcontrollers");
/**
 * @param POST /ajout
 * @description ajoute une annonce
 * @access PRIVATE
 */
productrouter.post("/add", upload.single('pic'),isAuth(), ajoutProduct);
// productrouter.get("/myproduct/:id",isAuth(),getProductById)
productrouter.get("/myproduct",isAuth(),getProductById)
productrouter.get("/allproduct",GetAllProduct)
module.exports = productrouter;