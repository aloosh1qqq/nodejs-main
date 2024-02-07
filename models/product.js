const mongoose = require("mongoose");
const ratingSchema = require("./rating");

const Schema = mongoose.Schema;


const productSchema = mongoose.Schema({
    id: Number,
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    images: [{
        type: String,
        required: true,
    }, ],
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    cpu: {
        type: String,

    },
    gpu: {
        type: String,

    },
    ram: {
        type: String,

    },
    storage: {
        type: String,

    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    ratings: [ratingSchema],
});

const Product = mongoose.model("Product", productSchema);
module.exports = { Product, productSchema };