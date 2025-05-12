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

export const obtener_contratos = () => {
    return new Promise((resolve, reject) => {
        try {
            const sql = `SELECT * FROM contratosInfo`;
            db.query(sql, (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al obtener los contratos",
                            error: error.message
                        }
                    });
                    return;
                }
                resolve({
                    success: true,
                    body: results[0]
                });
            })
        } catch (error) {
            resolve({
                success: false,
                body: {
                    message: "Error al obtener los contratos",
                    error: error
                }
            });
        }
    })
};

export const eliminar_contrato = (idContrato) => { 
    return new Promise((resolve, reject) => {
        try {
            const sql = `CALL delete_contrato(?)`;
            db.query(sql, [idContrato], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al eliminar el contrato",
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
                    message: "Error al eliminar el contrato",
                    error: error
                }
            });
        }
    })
};

export const eliminar_aumento_salarial = (idAumento) => {
    return new Promise((resolve, reject) => {
        try {
            const sql = `CALL delete_aumentoSalarial(?)`;
            db.query(sql, [idAumento], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al eliminar el aumento salarial",
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
                    message: "Error al eliminar el aumento salarial",
                    error: error
                }
            });
        }
    })
};

export const actualizar_aumento_salarial = (data) => {
    return new Promise((resolve, reject) => {
        const {idAumento, fecha_aumento, valor} = data;
        try {
            const sql = `UPDATE aumentoSalarial a SET a.valor_aumentoSalarial = ?, a.fecha_aumentoSalarial = ? WHERE a.id_aumentoSalarial = ?`;
            db.query(sql, [valor, fecha_aumento, idAumento], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al actualizar el aumento salarial",
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
                    message: "Error al actualizar el aumento salarial",
                    error: error
                }
            });
        }
    })
};