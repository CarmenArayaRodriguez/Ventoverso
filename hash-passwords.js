//Archivo utilizado para hacer hash de las contraseñas planas que ya estaban ingresadas en la base de datos

const bcrypt = require('bcrypt');
const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        winston.format.colorize(),
        winston.format.simple()
    ),
    transports: [
        new winston.transports.Console(),
    ],
});

async function hashPassword(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}


const passwordPlana = 'password';
hashPassword(passwordPlana).then((hashedPassword) => {
    logger.debug(hashedPassword);

});
