const errorRef = require("../config/responseErrosReference.js");
const errHandler = (res) => {
    return (err) => {
        const status = errorRef[err.name].status;
        res.status(status)
        .json(err);
    }
};
module.exports = errHandler;