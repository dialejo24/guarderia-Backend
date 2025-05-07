import { db } from "../config.js";

export const crear_contrato = (data) => {
    return new Promise((resolve, reject) => {
        const {idEmpleado, idSede, fechaInicio, fechaFin} = data;
        try {
            const sql = `CALL crear_contrato(?, ?, ?, ?)`;
            db.query(sql, [fechaInicio, fechaFin, idEmpleado, idSede], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al insertar el contrato",
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
                    message: "Error al crear el contrato",
                    error: error
                }
            });
        }
    })
};

export const agregar_aumento_salarial = (data) => {
    return new Promise((resolve, reject) => {
        const {idContrato, fecha_aumento, valor} = data;
        try {
            const sql = `INSERT INTO aumentoSalarial(valor_aumentoSalarial, fecha_aumentoSalarial, fk_contrato)
            VALUES (?, ?, ?)`;
            db.query(sql, [valor, fecha_aumento, idContrato], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al insertar el aumento salarial",
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
                    message: "Error al crear el aumento salarial",
                    error: error
                }
            });
        }
    })
};