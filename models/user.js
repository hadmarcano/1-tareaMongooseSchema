const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        names:{
            type: String,
            trim: true,
            required: true
        },
        surnames:{
            type: String,
            trim: true,
            required
        },
        password:{
            type: String,
            trim: true,
            required: true
        },
        bithdate:{
            type: Date,
            default: Date.now
        },
        email:{
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        avatar: {
            type: String,
            trim: true,
            default: ""
        },
        banner: {
            type: String,
            trim: true,
            default: ""
        },
        location : {
            type: String,
            trim: true,
            default: ""
        },
        website: {
            type: String,
            trim: true,
            default: ""
        }
    },{timestamps: true}
);

module.exports = mongoose.model('User', userSchema);
