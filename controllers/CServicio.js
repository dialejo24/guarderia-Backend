import { db } from "../config.js";

export const crear_servicio = (data) => {
    return new Promise((resolve, reject) => {
        const { idInscripcion, idSede, fechaInicio, fechaFin, recomendaciones,
            nombre, valor, descripcion } = data;
        try {
            const sql = `CALL crear_servicio(?, ?, ?, ?, ?, ?, ?, ?)`;
            db.query(sql, [fechaInicio, fechaFin, recomendaciones, 
                idInscripcion, idSede, nombre, valor, descripcion], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al insertar el servicio",
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
                    message: "Error al crear el servicio",
                    error: error
                }
            });
        }
    })
};

export const obtener_servicios = () => {
    return new Promise((resolve, reject) => {
        try {
            const sql = `SELECT * FROM serviciosInfo`;
            db.query(sql, (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al obtener los servicios",
                            error: error.message
                        }
                    });
                    return;
                }
                resolve({
                    success: true,
                    body: results[0]
                });
            });
        } catch (error) {
            resolve({
                success: false,
                body: {
                    message: "Error al obtener los servicios",
                    error: error
                }
            });
        }
    }
    )
};

export const actualizar_servicio = (data) => {
    return new Promise((resolve, reject) => {
        const { idServicio, idServicioAdicion, idAdicion, fechaFin, recomendaciones,
            nombre, valor, descripcion } = data;
        try {
            const sql = `CALL update_servicio(?, ?, ?, ?, ?, ?, ?, ?)`;
            db.query(sql, [idServicio, idServicioAdicion, idAdicion, fechaFin, recomendaciones,
                nombre, valor, descripcion], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al actualizar el servicio",
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
                    message: "Error al actualizar el servicio",
                    error: error
                }
            });
        }
    })
};

export const eliminar_servicio = (idServicio) => {
    return new Promise((resolve, reject) => {
        try {
            const sql = `CALL delete_adicion(?)`;
            db.query(sql, [idServicio], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al eliminar el servicio",
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
                    message: "Error al eliminar el servicio",
                    error: error
                }
            });
        }
    })
};

