const POOL = require("pg").Pool;
const Pool = new POOL({
    host:"localhost",
    port:5432,
    password:"8896",
    database:"wocktan",
    user:"postgres"
});

module.exports = Pool