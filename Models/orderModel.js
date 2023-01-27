const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    orderitems: [
        {type:mongoose.Schema.Types.ObjectId,ref:"Orderitems",require:true}
    ],
    shippingAddress1: { type: String, required: true },
    shippingAddress2: { type: String },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: Number, required: true },
    status: { type: String, required: true,default: "Pending" },
    totalPrice: { type: Number },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    dateOrdered: { type: Date, default: Date.now },
});

ordersSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

ordersSchema.set("toJSON", {
    virtuals: true,
})

const Orders = mongoose.model('Orders', ordersSchema);

module.exports = Orders;



/*
{
"orderiterms" : [
       {
          "quantity": 3,
          "products": "63d0dc9b89cc96c38bdb5aab"
       }
       {
          "quantity": 3,
          "products": "63d0dcbf89cc96c38bdb5aae"
       }
    ],
    shippingAddress1: "Surat"
    shippingAddress2: "Surat"
    city: "Surat"
    zip: "78965"
    country: "India"
    phone: 9876543216
    user: "63cf9419c3a7c27542ad1009"
    

}

*/