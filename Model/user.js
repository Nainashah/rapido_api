const mongoose =require("mongoose");
const userSchema = new mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},


})
const User = new mongoose.model("Users",userSchema)

module.exports = User;