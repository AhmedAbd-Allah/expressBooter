const AuthenticationController = require('../../Controllers/AuthenticationController');




module.exports = {

    authenticateUser = async function (req, res, next) {
        try {
            let accessToken = req.body.accessToken;
            let validToken = await AuthenticationController.validateToken(accessToken)
            return validToken ? next() : res.status(400).send("bad request")
        } catch (error) {
            return res.status(500).send("internal server error")
        }

    },

}