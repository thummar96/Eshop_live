const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require("cors");
const app = express();
const authjwt = require("./helpers/jwt");
require("dotenv/config");


//cors
app.use(cors());
app.options("*", cors());

//strictQuery

mongoose.set("strictQuery", true);
app.use(morgan('tiny'))


//json
app.use(express.json());
app.use(express.urlencoded());

app.use(authjwt);

// app.use(
//     jwt({
//         secret:"shhhhhhhhhh-secret",
//         algorithms:["HS256"],
//     }).unless({ path: ["/token"]})
// );



//Default
app.get('/', (req, res) => {
    res.json({ 'msg': "default" });
});

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected...!'))
    .catch((err) => {
        console.log(err);
    });

// getdata
app.use('/getusers', require('./routes/users'));
app.use('/getcategory', require('./routes/category'));
app.use('/getproducts', require('./routes/prodcuts'));
app.use('/getorders', require('./routes/orders'));
app.use('/getorderitems', require('./routes/orderitems'));

//Postdata
app.use('/postusers', require('./routes/users'));
app.use('/postcategory', require('./routes/category'));
app.use('/postproducts', require('./routes/prodcuts'));
app.use('/postorders', require('./routes/orders'));
app.use('/postorderitems', require('./routes/orderitems'));

//updatedata
app.use('/updateusers', require('./routes/users'));
app.use('/updatecategory', require('./routes/category'));
app.use('/updateproducts', require('./routes/prodcuts'));
app.use('/updateorders', require('./routes/orders'));
app.use('/updateorderitems', require('./routes/orderitems'));

//deletedata
app.use('/deleteusers', require('./routes/users'));
app.use('/deletecategory', require('./routes/category'));
app.use('/deleteproducts', require('./routes/prodcuts'));
app.use('/deleteorders', require('./routes/orders'));
app.use('/deleteorderitems', require('./routes/orderitems'));

// login
app.use('/user', require('./routes/users'));

const PORT = process.env.PORT || 3300
app.listen(PORT, () => {
    console.log(`Server listening Port : ${PORT}`);
})