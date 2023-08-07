const base64 = require('../helpers/base64.js');
const errorResponse = require('../helpers/errorResponse.js');
const service = require('../services/UserServices.js');
module.exports = (req, res, next) => {
    const responser = errorResponse(res);
    let hash = req.get('Authorization');
    [name, pass] = base64.decode(hash);
    service.authentication(name, pass)
    .then((data) => {
        req.curenUser = data;
        next();
    })
    .catch((error) => responser(error))
}