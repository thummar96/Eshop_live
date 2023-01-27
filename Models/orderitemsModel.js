
const mongoose = require('mongoose');

const orderitemsSchema = new mongoose.Schema({
    quantity: { type: Number, required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Products" }
});


orderitemsSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

orderitemsSchema.set("toJSON", {
    virtuals: true,
});

const Orderitems = mongoose.model('Orderitems', orderitemsSchema);

module.exports = Orderitems;



/* {
    
        "product": "63cf9435c3a7c27542ad100e",
            "quantity": 1
} */