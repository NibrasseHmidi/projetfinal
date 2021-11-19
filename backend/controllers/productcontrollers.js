const productmodel = require('../models/Product')
const usermodel = require('../models/User')
const ObjectID = require("mongoose").Types.ObjectId;
const multer = require ('multer')
let path = require('path')

const {v4 : uuiv4} = require('uuid')

const storage = multer.diskStorage({
  destination:function(req, file, cb){
    cb(null, '.././Client/public/uploads')
  },
  filename : function(req, file, cb){
    cb(null, uuiv4() ,'-',Date.now()+ path.extname(file.originalname))
  }
})

const fileFilter = (req,file,cb) => {
  const allowedFileType = [ 'image/jpeg', 'image/jpg' , 'image/png']
  if (allowedFileType.includes(file.mimetype)) {
    cb(null,true)
    
  } else {
    cb(null,false)
  }
}
const upload= multer({ storage, fileFilter})



const ajoutProduct = (req, res) => {
 const {name,
  numero,
  address,
  tarifJ,
  tarifS,
  tarifM,
  caution,
  message,
  ville,
  category
} = req.body
const pic=req.file.filename
 
const product = new productmodel({
  name,
    numero,
    address,
    tarifJ,
    tarifS,
    tarifM,
    caution,
    message,
    ville,
    category,
    user:req.user,
    pic
})
product.save().then(result=> {
  res.send(result)
})
.catch(err => {
  console.log(err)
})

}



const getProductById = async (req, res) => {
 productmodel.find({user:req.user._id})
    .populate("user","_id name")
    .then(myproduct=>{
        res.send({myproduct})
    })
    .catch(err=>{
        console.log(err)
    })
}

//get all product

const GetAllProduct= async (req,res)=> {
const allProduct = await productmodel.find();
       res.status(200).json(allProduct)

}
module.exports = {upload,ajoutProduct,getProductById ,GetAllProduct}