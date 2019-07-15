const routesParams = require('./../Config/Params');

module.exports = function (req, res, next) {
    let route = req.route.path;
    let httpMethod = req.route.stack[0].method;
    let methodAndRoute = httpMethod + ' ' + route;
    let validParams = true;

    for (let [paramPlace, params] of Object.entries(routesParams[methodAndRoute])) {
        for (let [param, isMandatory] of Object.entries(routesParams[methodAndRoute][paramPlace])) {

            if (isMandatory && !(req[paramPlace][param])) {
                validParams = false;
                break;
            }
        }
        if (!validParams)
            break;
    }
    validParams ? next() : res.status(422).send("enter valid params")

}