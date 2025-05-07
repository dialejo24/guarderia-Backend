import { db } from "../config.js";

export const crear_salario = (data) => {
    return new Promise((resolve, reject) => {
        const {salario, fechaRige, idRol} = data;
        try {
            const sql = `CALL crear_salario(?, ?, ?)`;
            db.query(sql, [salario, fechaRige, idRol], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al insertar el salario",
                            error: error.message
                        }
                    });
                    return;
                }
                resolve({
                    success: true,
                    body: results
                });
            })
        } catch (error) {
            resolve({
                success: false,
                body: {
                    message: "Error al crear el salario",
                    error: error
                }
            });
        }
    })
}