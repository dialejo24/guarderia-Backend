import e from "express";
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

export const obtener_inscripciones = () => {
    return new Promise((resolve, reject) => {
        try {
            const sql = `SELECT * FROM inscripcionesInfo`;
            db.query(sql, (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al obtener las inscripciones",
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
                    message: "Error al obtener las inscripciones",
                    error: error
                }
            });
        }
    }
    )
};

export const actualizar_inscripcion = (data) => {
    return new Promise((resolve, reject) => {
        const { idInscripcion, fechaInicio, fechaFin, recomendaciones, fk_plan } = data;
        try {
            const sql = `CALL update_inscripcion(?, ?, ?, ?, ?)`;
            db.query(sql, [idInscripcion, fechaInicio, fechaFin, recomendaciones, fk_plan], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al actualizar la inscripcion",
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
                    message: "Error al actualizar la inscripcion",
                    error: error
                }
            });
        }
    })
};

export const eliminar_inscripcion = (id) => {
    return new Promise((resolve, reject) => {
        try {
            const sql = `CALL delete_inscripcion(?)`;
            db.query(sql, [id], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al eliminar la inscripcion",
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
                    message: "Error al eliminar la inscripcion",
                    error: error
                }
            });
        }
    })
};