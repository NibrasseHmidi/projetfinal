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


//addProduct
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


//get all product of one user 
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

//get details of one product
const GetDetailsProduct = async (req,res)=> {
const details = await productmodel.findById(req.params.id).populate({path:"user",select:"name lastname pic"})
  if (details) {
   return res.json(details);
  } else {
   return res.status(404).json({ message: "details not found" });
  }
}

//update 

const UpdateProduct = async (req,res)=> {
// const {name,numero,address,tarifJ,tarifS,tarifM,caution,message,ville,category} = req.body
// const pic=req.file.filename
 
// const update = await productmodel.findById(req.params.id);

//  if (update) {
//   update.name=name;
//   update.numero=numero;
//   update.address=address;
//   update.tarifJ=tarifJ;
//   update.tarifS=tarifS;
//   update.tarifM=tarifM;
//   update.caution=caution;
//   update.message=message;
//   update.ville=ville;
//   update.category = category;

//     const updatedProduct = await update.save();
//     res.json(updatedProduct);
//   } else {
//     res.status(404);
//     throw new Error("Product not found");
//   }

 try {
      const update = await productmodel.findByIdAndUpdate(req.params.id, req.body);
      res.status(200);
      res.json(update);
    } catch (error) {
      res.status(500);
      throw new Error('Update failed');
    }

}

const DeleteProduct = async (req,res)=> {

const deleteProduct = await productmodel.findById(req.params.id);
  if (deleteProduct) {
    await deleteProduct.remove();
    res.json({ message: "Product Removed" });
  } else {
    res.status(404);
    throw new Error("Note not Found");
  }

}



module.exports = {upload,ajoutProduct,getProductById ,GetAllProduct,GetDetailsProduct,UpdateProduct,DeleteProduct}