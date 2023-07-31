const errorRef = require("../config/responseErrosReference.js");
const errHandler = (res) => {
    (err) => {
        const status = errorRef[err.name].status;
        res.status(status)
        .json(err);
    }
};
module.exports = errHandler;