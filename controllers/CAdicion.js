import { db } from "../config.js";

export const crear_adicion = (data) => {
    return new Promise((resolve, reject) => {
        const { nombre, valor, descripcion } = data;
        try {
            const sql = `CALL crear_adicion(?, ?, ?)`;
            db.query(sql, [nombre, valor, descripcion], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al insertar la adicion",
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
                    message: "Error al crear la adicion",
                    error: error
                }
            });
        }
    })
};

export const obtener_adiciones = () => {
    return new Promise((resolve, reject) => {
        try {
            const sql = `SELECT * FROM adicionesInfo`;
            db.query(sql, (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al obtener las adiciones",
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
                    message: "Error al obtener las adiciones",
                    error: error
                }
            });
        }
    }
    )
};

export const actualizar_adicion = (data) => {
    return new Promise((resolve, reject) => {
        const { idAdicion, nombre, valor, descripcion } = data;
        try {
            const sql = 'CALL actualizar_adicion(?,?,?,?)';
            db.query(sql, [idAdicion, nombre, valor, descripcion], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al actualizar la adicion",
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
                    message: "Error al actualizar la adicion",
                    error: error
                }
            });
        }
    })
};

export const eliminar_adicion = (idAdicion) => {
    return new Promise((resolve, reject) => {
        try {
            const sql = `CALL eliminar_adicion(?)`;
            db.query(sql, [idAdicion], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al eliminar la adición",
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
                    message: "Error al eliminar la adición",
                    error: error
                }
            });
        }
    })
};

export const insertar_servicio_adicion = (data) => {
    return new Promise((resolve, reject) => {
        const { fk_servicio, fk_adicion, recomendaciones, valor_adicion } = data;
        try {
            const sql = `CALL crear_servicio_adicion(?,?,?,?)`;
            db.query(sql, [fk_servicio, fk_adicion, recomendaciones, valor_adicion], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al insertar la adicion",
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
                    message: "Error al crear la adicion",
                    error: error
                }
            });
        }
    });
};

export const eliminar_servicio_adicion = (idServicioAdicion) => {
    return new Promise((resolve, reject) => {
        try {
            const sql = `CALL eliminar_servicio_adicion(?)`;
            db.query(sql, [idServicioAdicion], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al eliminar el servicio adicion",
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
                    message: "Error al eliminar el servicio adicion",
                    error: error
                }
            });
        }
    })
};

