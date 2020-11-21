const mysql = require( 'mysql' );

class Database {
    constructor(config) {
        this.connection = mysql.createConnection(config);
    }
    query(sql, args = []) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err)
                    return reject(err);
                resolve(rows);
            });
        });
    }
    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    }
}

// at top INIT DB connection
const db = new Database({
    host: "r1bsyfx4gbowdsis.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "u9cqn4g60jkui4hq",
    password: "qxjbcrcaicjcebc4",
    database: "oqdmlsaf6odufnsg"
});

module.exports = db