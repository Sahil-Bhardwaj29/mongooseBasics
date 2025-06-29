import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type:String,
        required:true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    orderItems:{
        type: [orderItemSchema]//schema in array
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum: ["PENDING","CANCELLED","DELIVERED"],// give only these options
        default:"PENDING"
    }
},{timestamps:true})
export const Order = mongoose.model("Order",orderSchema)