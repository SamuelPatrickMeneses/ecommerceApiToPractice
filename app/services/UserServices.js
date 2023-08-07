const userRepository = require('../models/User.js');
const {isConectade} = require('../config/DBConection.js');
const {bcryptSalt} = require('../config/securityConfig.js');
const bcrypt = require('bcryptjs');
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
    DTOToUser({id, address, payment, name, pass}){
        return {_id: id, address, payment, userName: name, userPass: pass};
    },
    async  getUsers(){
        try{
            const users = await userRepository.find();
            return users.map(this.userToDTO);
        }catch({name, errors}){
            throw formatError(name, errors);
        }
    },
    async crateUser(dto){
        try{
            let user = this.DTOToUser(dto);
            user.userPass = await bcrypt.hash(user.userPass, bcryptSalt);
            user = await userRepository.create(user);
            return this.userToDTO(user);
        }catch(err){
            throw formatError(err.name, err.error);
        }
    },
    async  getUsersById(id){
        try{
            const user = await userRepository.findOne({_id: id});
            if(!user)
                throw {name: 'NotFoundError', errors:['user not found']};
            return this.userToDTO(user);
        }catch({name, errors}){
            throw formatError(name, errors);
        }
    },
    async  getUsersByName(useName){
        try{
            const user = await userRepository.findOne({'userName': UserName});
            if(!user)
                throw {name: 'NotFoundError', errors:['user not found']};
            return this.userToDTO(user);
        }catch({name, errors}){
            throw formatError(name, errors);
        }
    },
    async authentication(userName, pass){
        try{
            const user = await userRepository.findOne({'userName': userName});
            if(!user)
                throw {errors:['user not found']};
            if(await bcrypt.compare(pass, user.userPass))
                return this.userToDTO(user);
            throw {errors:[]};
        }catch({errors}){
            throw formatError('AuthenticationError', errors);
        }
    },
};