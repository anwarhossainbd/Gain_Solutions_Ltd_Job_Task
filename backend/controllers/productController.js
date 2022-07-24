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

exports.ProductmodelSummary =  catchAsyncErrors(  async(req,res,next)=>{   
    const products = await Product.find().sort({createdAt:-1}) ;
    res.status(200).json({
        success:true,
        products
    })
})


exports.getAllProducts =  catchAsyncErrors(  async(req,res,next)=>{
    const resultPerPage =20 ;
    const apiFeature = new ApiFeatures(Product.find(),req.query).search().filter().pagination(resultPerPage)
    const products = await apiFeature.query
    res.status(200).json({
        success:true,
        products
    })
})


// single products 
// exports.getSingleProduct = catchAsyncErrors(  async(req,res,next)=>{

//     const product = await Product.findById(req.params.id)

//     if(!product){
//         return res.status(500).json({
//             success:false,
//             message:"Product not found"
//         })
//     }

//     res.status(200).json({
//         success:true,
//         product
//     })
// })

