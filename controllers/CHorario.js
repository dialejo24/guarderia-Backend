import { db } from "../config.js";

export const crear_horario = (data) => {
    return new Promise((resolve, reject) => {
        const {horaInicio, horaFin, idSede, dia} = data;
        try {
            const sql = `CALL crear_horario(?, ?, ?, ?)`;
            db.query(sql, [horaInicio, horaFin, idSede, dia], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al insertar el horario",
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
                    message: "Error al crear el horario",
                    error: error
                }
            });
        }
    })
};