const pool = require('../utils/pool.js');

module.exports = class User {
    userId;
    userName;
    userPoints;

    constructor(rows) {
        this.userId = rows.id;
        this.userName = rows.username;
        this.userPoints = rows.userpoints;
    }

    static async createUser(userName, userPoints) {
        const { rows } = await pool.query(
            'INSERT INTO users(username, userpoints) VALUES($1, $2) RETURNING * ',
            [userName, userPoints]
          );
      
          return new User(rows[0]);
    }

    static async getUserById(id) {
        const { rows } = await pool.query(
            'SELECT * from users WHERE id=$1 RETURNING  * ',
            [id]
        );
        return new User(rows[0])
    }


}