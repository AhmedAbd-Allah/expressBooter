const authenticationController = require('./Controllers/AuthenticationController')
module.exports = {
    get:{
        '/':authenticationController.auth,
        '/in': [authenticationController.midlle, authenticationController.in]
    },
    post:{
        '/':authenticationController.authPost,
    },
    put:{

    },
    delete:{

    }
}