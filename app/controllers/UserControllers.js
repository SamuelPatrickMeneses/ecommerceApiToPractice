const userServise = require('../services/UserServices.js');
const errHandler = require('../helpers/errorResponse.js');
function getUsers(req, res){
    userServise.getUsers()
    .then((data) => {
        res.status(200)
        .json(data);
    }).catch(errHandler(res));
}

function postUser(req, res){
    userServise.crateUser(req.body)
    .then((data) => {
        res.status(201)
        .json(data);
    }).catch(errHandler(res));
}

function getUserById(req, res){
    const userId = req.params['user_id'];
    userServise.getUsersById(userId)
    .then((data) => {
        res.status(200)
        .json(data);
    }).catch(errHandler(res));
};

module.exports = {getUsers,getUserById,postUser};