const express =require ("express");
const { getAllProducts , createProduct,ProductmodelSummary,getSingleProduct} = require("../controllers/productController");


const router =express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/summary").get(ProductmodelSummary);
// router.route("/products/single").get(getSingleProduct);
router.route("/product/new").post(createProduct)


module.exports = router