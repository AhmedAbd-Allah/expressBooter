const EncryptionService = require('../Services/EncryptionService');
const ValidationService = require('../Services/ValidationService')

module.exports = {
    validateToken: function (token) {
        return new Promise((resolve, reject) => {
            try {
                let decryptedToken = EncryptionService.decryptData(token)
                let validToken = ValidationService.validateToken(decryptedToken)
                return validToken ? resolve(true) : resolve(false)
            } catch (error) {
                reject(error)
            }
        })
    },

}