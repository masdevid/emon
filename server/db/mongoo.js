const mongoose = require('mongoose');
const { mongooUrl, mongooOps}  = require('../env.conf')
const { red, green, magenta } = require('chalk')
const fname = __filename.split('/')
const debug = require('debug')(`${process.env.npm_package_name}:${fname[fname.length-1]}`);
let connTry = 0
const db = mongoose.connection
db.once('open', ()=>{
    debug(green('DB connected'))
});
const onMongoError = (err)=>{
    if(err) {
        const { name, errorLabels } = err;
        debug(`${red(name)}: `)
        debug(errorLabels)
        if(connTry<3) {
            connTry+=1
            debug(`DB connection retrying: ${connTry} attempt`)
            setTimeout(()=>{
                this.connect()
            }, 3000)
        }
        if(connTry==3) {
            console.log(magenta('Mongoose connection is disconnected due to failed to connect 3 times'));
            mongoose.disconnect()
            process.exit(0)
        }
    } else {
        connTry = 0
    }
}
exports.connect = ()=>{
    mongoose.connect(mongooUrl, mongooOps, onMongoError);
}
