const mongoose = require('mongoose');
class DBConection{
    constructor(){
        this.conectade = false;
        const conectionURL = process.env.MONGODB_URL;
        mongoose.connect(conectionURL,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        }).then(async () => {
            console.log('Conectade!');
            this.conectade = true;
        }).catch((err) => {
            console.log(err);
        });
    }
    isConectade(){
        return this.conectade;
    }
}

module.exports = new DBConection();