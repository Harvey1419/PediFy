const {Schema, model} = require('mongoose')
const productSchema = require('../product/product.model')

const factureSchema = new Schema({
    product: String,
    quantity: Number,
    total: Number
},{
    createdAt:true
});
module.exports = model('Facture', factureSchema)
