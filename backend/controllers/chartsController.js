const Charts = require("../models/chartsModel")
const catchAsyncErrors =require("../middleware/catchAsyncError");


//Create Product

exports.createchart = catchAsyncErrors( async(req,res,next)=>{
    
   const chart= await Charts.create(req.body)

    res.status(201).json({
        success:true,
        chart,
    })
})


exports.getAllChartdata =  catchAsyncErrors(  async(req,res,next)=>{

   
    const chart = await Charts.find() ;
    

    res.status(200).json({
        success:true,
        chart
    })
})