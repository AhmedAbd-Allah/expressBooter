const authenticationController = require('./Controllers/AuthenticationController');
const registrationController = require('./Controllers/RegistrationController');
const paramsMiddleware = require('./Middlewares/ParamsMiddleware');
const validationMiddleware = require('./Middlewares/ValidationMiddleware')

module.exports = {
    get:{
    },
    post:{
        '/register':[paramsMiddleware, validationMiddleware],
    },
    put:{

    },
    delete:{

    }
    //, validationMiddleware, registrationController.register
}