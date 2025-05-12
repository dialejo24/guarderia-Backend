import mysql from "mysql2";

export const PORT = 5000;
export const db = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: ''
});