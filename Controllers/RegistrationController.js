const RegistrationService = require('../Services/RegistrationService')
module.exports = {
    register: async function (req, res) {
        try {
            let user =  await RegistrationService.registerUser(req, res);
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}