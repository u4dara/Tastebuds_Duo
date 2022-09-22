const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderID : {
        type : Number ,
        require : true,
    },

    foodID : {
        type : Number ,
        require : true,
    },

    quntity : {
        type : Number ,
        require : true,
    },

    totalAmount : {
        type : Number 
    },

    address : {
        type : String,
        require : true,
        minlength: 5,
        maxlength: 50
    },

    date: {
        type : Date,
        default : Date.now
    },
});

module.exports = mongoose.model("Order",orderSchema);