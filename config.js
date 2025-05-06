import mysql from "mysql";

export const PORT = 5555;
export const mongodbURL = "mongodb+srv://root:root@producto.76fjckw.mongodb.net/imagenes-collection?retryWrites=true&w=majority&appName=Producto"
export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dads24052002@',
    database: 'ventacredito'
});