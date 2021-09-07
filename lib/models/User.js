const pool = require('../utils/pool.js');

module.exports = class User {
    userId;
    userName;
    userPoints;

    constructor(rows) {
        this.userId = rows.id;
        this.userName = rows.username;
        this.userPoints = rows.user_points;
    }

    static async createUser({userName, userPoints}) {
        const { rows } = await pool.query(
            `INSERT INTO users (username, user_points) VALUES($1, $2) RETURNING * `,
            [userName, userPoints]
          );
      
          return new User(rows[0]);
    }

    static async getUserById(userId) {
        const { rows } = await pool.query(
            `SELECT 
            username, 
            user_points 
            FROM users WHERE id=$1 `,
            [userId]
        );
        return rows.map((row) => new User(row))
    }


}