module.exports = {
    encode(name, pass){
        return Buffer.from(
            `${name} ${pass}`,
            'utf8'
        ).toString('base64');
    },
    decode(hash){
        return Buffer.from(hash,'base64')
        .toString('utf8').split(' ');
    }

};