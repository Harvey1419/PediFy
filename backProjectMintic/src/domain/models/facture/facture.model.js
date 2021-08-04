const {Schema, model} = require('mongoose')

const factureSchema = new Schema({
    list: [{product : {productName: String, productPrice: Number},quantity: Number}],
    total: Number
},{
    createdAt:true
});
module.exports = model('Facture', factureSchema)
