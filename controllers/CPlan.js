import { db } from "../config.js";

export const crear_plan = (data) => {
    return new Promise((resolve, reject) => {
        const { nombre, tarifa } = data;
        try {
            const sql = `CALL crear_plan(?, ?)`;
            db.query(sql, [nombre, tarifa], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al insertar el plan",
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
                    message: "Error al crear el plan",
                    error: error
                }
            });
        }
    })
};