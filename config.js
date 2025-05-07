import mysql from "mysql2";

export const PORT = 5000;
export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dads24052002@',
    database: 'guarderia'
});