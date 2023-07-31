const userRepository = require('../models/User.js');
const {isConectade} = require('../config/DBConection.js');
function formatError(name, errors){
    return {
        "name": isConectade ? name : 'DatabaseError',
        onPaths: errors ? Object.keys(errors) : undefined
    };
}

module.exports = {
    userToDTO({_id, address, payment, userName}){
        return {id: _id, address, payment, name: userName};
    },
    DTOToUser({id, address, payment, name}){
        return {_id: id, address, payment, userName: name};
    },
    async  getUsers(){
        try{
            const users = await userRepository.find();
            return users.map(this.userToDTO);
        }catch({name, errors}){
            throw formatError(name, error);
        }
    },
    async crateUser(dto){
        try{
            let user = this.DTOToUser(dto);
            user = await userRepository.create(user);
            return this.userToDTO(user);
        }catch(err){
            throw formatError(err.name, err.error);
        }
    },
    async  getUsersById(id){
        try{
            const user = await userRepository.findOne({_id: id});
            return this.userToDTO(user);
        }catch({name, errors}){
            throw formatError(name, error);
        }
    },
};