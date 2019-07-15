const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuidv4');

const userSchema = new Schema({
    _id: {
        type: String,
        default: uuid()
    },
    userName: {
        type: String
    },
    userRole: {
        type: String
    },
    email: {
        type: String
    },
    mobileNumber: {
        type: String
    },
    profile_image_url: {
        type: String
    },
    password: {
        type: String
    },
    accessToken: {
        type: String
    },
    refreshToken: {
        type: String
    }
}, { timestamps: true });

mongoose.model('User', userSchema);

module.exports = mongoose.model('User');