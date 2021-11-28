const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
   pic: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  //   product: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Product",
  // },
}


,{
    timestamps: true,
  });
// //Popuplating this field of products to user s
// userSchema.virtual('products', {
//   ref: 'Product',
//   foreignField: 'user',
//   localField: '_id',
// });
// userSchema.set('toJSON', { virtuals: true });
//=== END=======
module.exports = mongoose.model("User", userSchema);
