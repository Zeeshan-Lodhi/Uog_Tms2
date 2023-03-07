var mysql = require('mysql');
// const con = mysql.createConnection({
//     host: 'bpakbcrmz0xdsvt78iph-mysql.services.clever-cloud.com',
//     user: 'u35zfoamiweupseg',
//     password: '0rJSz9HaydBGZgXITsPG',
//     database: 'bpakbcrmz0xdsvt78iph'
// });
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'shani',
    database: 'uog_transport'
});
module.exports = { con }
