const bcrypt = require('bcrypt');

async function hashPassword(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}


const passwordPlana = 'contrasena125';
hashPassword(passwordPlana).then((hashedPassword) => {
    console.log(hashedPassword);

});
