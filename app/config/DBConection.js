const mongoose = require('mongoose');
class DBConection{
    constructor(){
        const conectionURL = process.env.MONGODB_URL;
        mongoose.connect(conectionURL,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        }).then(async (data) => {
            console.log('Conectade!');
            this.isConectade = true;
            this.conectionData = data;
        }).catch((err) => {
            console.log(err);
        });

    }
}

module.exports = new DBConection();