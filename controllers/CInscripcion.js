import { db } from "../config.js";

export const crear_inscripcion = (data) => {
    return new Promise((resolve, reject) => {
        const { idEstudiante, idPlan, fechaInicio, fechaFin, recomendaciones } = data;
        try {
            const sql = `CALL crear_inscripcion(?, ?, ?, ?, ?)`;
            db.query(sql, [fechaInicio, fechaFin, recomendaciones, idEstudiante, idPlan], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al insertar la inscripcion",
                            error: error.message
                        }
                    });
                    return;
                }
                resolve({
                    success: true,
                    body: results
                });
            });
        } catch (error) {
            resolve({
                success: false,
                body: {
                    message: "Error al crear la inscripcion",
                    error: error
                }
            });
        }
    })
};