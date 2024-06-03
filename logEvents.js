const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message, filename) => {
    const dateTime = `${format(new Date(), 'yyyy/MM/dd\tHH:mm:ss')}\t${uuid()}`;
    const logMessage = `${dateTime}\t${message}\n`;
    console.log(logMessage);
    try{
        if(!fs.existsSync(path.join(__dirname, 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', filename), logMessage);
    }
    catch(err){
        console.error(err);
    }
}

module.exports = logEvents;