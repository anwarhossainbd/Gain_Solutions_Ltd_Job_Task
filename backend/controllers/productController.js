const Product = require("../models/productModel")
const catchAsyncErrors =require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures");


//Create Product

exports.createProduct = catchAsyncErrors( async(req,res,next)=>{
    
   const product= await Product.create(req.body)

    res.status(201).json({
        success:true,
        product,
    })
})


exports.getAllProducts =  catchAsyncErrors(  async(req,res,next)=>{

    const resultPerPage =20 ;

    const apiFeature = new ApiFeatures(Product.find(),req.query).filter().pagination(resultPerPage)
    
    const products = await apiFeature.query

    res.status(200).json({
        success:true,
        products
    })
})