// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
// const adminRouter = require("./routes/admin");
// const admin = require("./routes/admin.router");
// const cors = require('cors');


// const allowedOrigins = ['http://localhost:3000', 'https://10.0.2.2:3000', 'http://127.0.0.1:3000'];
// const options = cors.CorsOptions = {
//     origin: allowedOrigins
// };



// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

// INIT
const PORT = process.env.PORT || 3000;
const app = express();
const DB =
    "mongodb+srv://ali:hple1901whp@ecommerce.357qh.mongodb.net/?retryWrites=true&w=majority";

// mongodb+srv://ali:hple1901whp@ecommerce.357qh.mongodb.net/?retryWrites=true&w=majority
// mongodb://localhost:27017/amazonDBs


// middleware
// app.use(cors(options));
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(express.json());
app.use(authRouter);

app.use(productRouter);
// app.use(userRouter);


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

// Connections
mongoose
    .connect(DB,options)
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((e) => {
        console.log(e);
    });

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
});
