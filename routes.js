const registrationController = require('./Controllers/RegistrationController');
const checkParams = require('./Middlewares/ParamsMiddleware');
const validateParams = require('./Middlewares/ValidationMiddleware');

module.exports = {
    get: {
    },
    post: {
        '/register': [checkParams, validateParams, registrationController.register],
    },
    put: {

    },
    delete: {

    }
}