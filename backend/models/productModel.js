
const mongoose =require("mongoose");

const productSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Please Enter Product Name"]
    },

    brand:{
        type:String,
        required:[true,"Please Enter Product Brand"]
    },

    Ram:{
        type:Number,
        required:[true,"Please Enter Product Ram"],
        
    },

     Rom:{
        type:Number,
        required:[true,"Please Enter Product  Rom"],
        
    },

    Tags:{
        bestValue:{
            type:Number,
           
        },
        bestCamera:{
            type:Number,
           
        },  
        bestPerformance:{
            type:Number,
           
        },  
    } ,
 

     images:[
        {
        public_id:{
            type:String,     
        },

        url:{
            type:String,    
        }
    }],

   
    price:{
        type:Number,
        required:[true,"Please Enter Product Price"],
    },

     createdAt:{
        type:Date,
        default:Date.now
    }
  
})

module.exports =mongoose.model("Product",productSchema)