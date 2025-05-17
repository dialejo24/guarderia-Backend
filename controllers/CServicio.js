import { db } from "../config.js";

export const crear_servicio = (data) => {
    return new Promise((resolve, reject) => {
        const { idInscripcion, idSede, fechaInicio, fechaFin } = data;
        try {
            const sql = `CALL crear_servicio(?, ?, ?, ?)`;
            db.query(sql, [fechaInicio, fechaFin, idSede, idInscripcion], (error, results) => {
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
                    body: results
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
        const { fechaInicio, fechaFin, idServicio } = data;
        try {
            const sql = 'CALL actualizar_servicio(?,?,?)';
            db.query(sql, [idServicio, fechaInicio, fechaFin], (error, results) => {
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
            })
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
            const sql = `CALL eliminar_servicio(?)`;
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

