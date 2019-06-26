const routesParams = require('./../Config/Params');


module.exports = function (req, res, next) {
    let route = req.route.path;
    let httpMethod = req.route.stack[0].method;
    let methodAndRoute = httpMethod + ' ' + route;

    for (let [paramPlace, params] of Object.entries(routesParams[methodAndRoute])) {
        for (let [param, isMandatory] of Object.entries(routesParams[methodAndRoute][paramPlace])) {
            if (isMandatory && !(req[paramPlace].param)) {
                res.status(422).send("enter valid " + param)
            }
        }
    }
    next()
}