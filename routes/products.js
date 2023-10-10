
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/test").then(function(){
  console.log("mongodb is connectedd..!!,http://localhost:3000");
})

var productSchema = mongoose.Schema({
  productName : String,
  price:String,
  company:String
})

module.exports = mongoose.model("product",productSchema);