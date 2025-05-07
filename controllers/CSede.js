import { db } from "../config.js";

export const crear_sede = (data) => {
    return new Promise((resolve, reject) => {
        const {nombre_sede, capacidad_niños, direccion_sede} = data;
        try {
            const sql = 'CALL crear_sede(?, ?, ?)';
            db.query(sql, [nombre_sede, capacidad_niños, direccion_sede], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al insertar la sede",
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
                    message: "Error al crear la sede",
                    error: error
                }
            });
        }
    })
}