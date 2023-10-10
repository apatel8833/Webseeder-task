var express = require('express');
var router = express.Router();
const productModal = require("./products")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/Create', function(req, res) {
  res.render('Create');
});
router.post('/Create/Product',async function(req, res) {
  var data = {
    productName:req.body.productName,
    price:req.body.price,
    company:req.body.company
  }
   var CreatedProduct = await productModal.create(data);
  //  res.render("allprods",{CreatedProduct});
  res.redirect("/allprod");
});

router.get("/allprod",async function(req,res){
   var allprod = await productModal.find();
   res.render("Allprod",{allprod})

})
router.get("/Edit/:id",async function(req,res){
  var product = await productModal.findById(req.params.id)
  res.render("Edit",{product})

})

router.post("/Edit/Product",async function(req,res){

  var list = {
     productName : req.body.productName,
     price:req.body.price,
     company:req.body.company
  }
 await productModal.findOneAndUpdate(list)
  res.redirect("/allprod")
})

router.get("/Delete/:id",async function(req,res){
  await productModal.findByIdAndDelete({_id:req.params.id})
  res.redirect("back");

})
module.exports = router;
