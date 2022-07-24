
const mongoose =require("mongoose");

const chartsSchema = new mongoose.Schema({

    sources:{    
        daraz:{
             type:Number,
             required:[true,"Please Enter this field"]
        },

        bikroy:{
            type:Number,
            required: [true,"Please Enter this field"]
        },
        pickaboo:{
             type:Number,
            required: [true,"Please Enter this field"]
        }
    },

   

    official:{
        type:Number,
        required:[true,"Please Enter this field"],
    },

    unofficial:{
        type:Number,
        required:[true,"Please Enter this field"],
    },

    withOutWarranty:{
        type:Number,
        required:[true,"Please Enter this field"],
    },

    used:{
        type:Number,
        required:[true,"Please Enter this field"],
    },
   
  
})

module.exports =mongoose.model("Charts",chartsSchema)