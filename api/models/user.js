const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Hospital_Id:{type:Number},
    Hospital_Name:{type:String},
    password: { type: String, required: true },
    Contact_Number:{type:Number},
    License_Number:{type:Number},
    Registration_Nu:{type:Number},
    Hospital_Type:{type:String},
    Address:{type:String},
    City:{type:String},
    State:{type:String},
    Pincode:{type:Number}
    
});

module.exports = mongoose.model('User', userSchema);