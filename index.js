const express = require('express');
const req = require('express/lib/request');
const app = express();
const monogoose = require('mongoose');
const { MONGO_DB_CONFIG, MONGO_DB_CONGIG } = require("./config/app.config");
const errors = require("./middleware/error");
const helmet = require('helmet');
const compreesion = require('compression');


const mongoose = require('mongoose');



const MONGODB_URI = `mongodb+srv://ali:ali@cluster0-ntrwp.mongodb.net`;
const MONGODB_URI2 = `mongodb+srv://ali:hple1901whp@ecommerce.357qh.mongodb.net/?retryWrites=true&w=majority`;

// const store = new MongoDBStore({
//     uri: MONGODB_URI,
//     collection: 'sessions'
// });

// monogoose.Promise = global.Promise;
// monogoose.connect(MONGO_DB_CONGIG.DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(
//     () => {
//         console.log("Database Connected");
//     },
//     (error) => {
//         console.log("Database cann't be connected: " + error);
//     }
// )


app.use(helmet());
app.use(compreesion());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use("/api", require("./routes/app.rout"));
app.use(errors.errorHandler);

mongoose
    .connect(MONGODB_URI2)
    .then(result => {
        app.listen(process.env.PORT || 3000);
    })
    .catch(err => {
        console.log(err);
    }).then(
        () => {
            console.log("Database Connected && app.listen "+(process.env.PORT || 3000));
        },
        (error) => {
            console.log("Database cann't be connected: " + error);
        })

// app.listen(process.env.port || 4000, function() {
//     console.log("Ready to Go!");
// });