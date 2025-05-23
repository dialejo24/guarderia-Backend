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
};

export const obtener_sedes = () => {
    return new Promise((resolve, reject) => {
        try {
            const sql = 'SELECT * FROM sedesInfo';
            db.query(sql, (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al obtener las sedes",
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
                    message: "Error al obtener las sedes",
                    error: error
                }
            });
        }
    }
    )
};

export const actualizar_sede = (data) => {
    return new Promise((resolve, reject) => {
        const {id_sede, nombre_sede, capacidad_niños, direccion_sede} = data;
        try {
            const sql = 'CALL update_sede(?, ?, ?, ?)';
            db.query(sql, [id_sede, nombre_sede, capacidad_niños, direccion_sede], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al actualizar la sede",
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
                    message: "Error al actualizar la sede",
                    error: error
                }
            });
        }
    })
};

export const eliminar_sede = (id) => {
    return new Promise((resolve, reject) => {
        try {
            const sql = 'CALL delete_sede(?)';
            db.query(sql, [id], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al eliminar la sede",
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
                    message: "Error al eliminar la sede",
                    error: error
                }
            });
        }
    })
};