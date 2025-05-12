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

export const obtener_planes = () => {
    return new Promise((resolve, reject) => {
        try {
            const sql = `SELECT * FROM planesInfo`;
            db.query(sql, (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al obtener los planes",
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
                    message: "Error al obtener los planes",
                    error: error
                }
            });
        }
    })
};

export const actualizar_plan = (data) => {
    return new Promise((resolve, reject) => {
        const { idPlan, nombre, tarifa } = data;
        try {
            const sql = `CALL update_plan(?, ?, ?)`;
            db.query(sql, [idPlan, nombre, tarifa], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al actualizar el plan",
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
                    message: "Error al actualizar el plan",
                    error: error
                }
            });
        }
    })
};

export const eliminar_plan = (idPlan) => {
    return new Promise((resolve, reject) => {
        try {
            const sql = `CALL delete_plan(?)`;
            db.query(sql, [idPlan], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al eliminar el plan",
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
                    message: "Error al eliminar el plan",
                    error: error
                }
            });
        }
    })
};