const authenticationController = require('./Controllers/AuthenticationController')
module.exports = {
    get:{
        '/':authenticationController.auth,
    },
    post:{

    },
    put:{

    },
    delete:{

    }
}