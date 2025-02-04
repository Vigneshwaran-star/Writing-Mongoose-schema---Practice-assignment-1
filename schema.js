const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const profileSchema = new Schema({
    firstName: {
        type:String,
        required: true,
    },
   
    lastName: {
        type:String,
        required: true,
    },
    age: {
        type:Number,
        required: true,
    },
})
const schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: [String],
        enum: ["user", "admin"],
        required: true,
    },
    profile: profileSchema,   
    lastLogin: {
        type: Date,
        default: Date.now,
    },
});        
    module.exports = {
        schema  
    }