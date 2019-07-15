const routesParams = require('./../Config/Params');
const validationService = require('../Services/ValidationService')
const paramsValidation = require('../Config/Validation')


module.exports = function (req, res, next) {
    let route = req.route.path;
    let httpMethod = req.route.stack[0].method;
    let methodAndRoute = httpMethod + ' ' + route;
    let validParams = true



    for (let [paramPlace, params] of Object.entries(routesParams[methodAndRoute])) {
        for (let [param, isMandatory] of Object.entries(routesParams[methodAndRoute][paramPlace])) {

            let validParam = validationService[paramsValidation[param]](req[paramPlace][param])
            if (!validParam) {
                validParams = false
                break;
            }
        }
        if (!validParams)
            break;
    }
    validParams ? next() : res.status(422).send("enter valid params")
}