const userModel = require('../Models/User')
const uuid = require('uuidv4');
const encryptionService = require('./EncryptionService')

module.exports = {
    registerUser: async function (req, res) {
        try {
            let userToRegister = {
                _id: uuid(),
                userName: req.body.userName,
                email: req.body.email,
                mobileNumber: req.body.mobileNumber,
                password: encryptionService.hashData(String(req.body.password)),
                profile_image_url: req.body.profile_image_url,
                userRole: 'user'
            }

            return await userModel.create(userToRegister)

        } catch (error) {
            return error;
        }

    }
}