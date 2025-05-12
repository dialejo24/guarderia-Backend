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

export const obtener_horarios = () => {
    return new Promise((resolve, reject) => {
        try {
            const sql = `SELECT * FROM horariosInfo`;
            db.query(sql, (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al obtener los horarios",
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
                    message: "Error al obtener los horarios",
                    error: error
                }
            });
        }
    }
    )
};

export const actualizar_horario = (data) => {
    return new Promise((resolve, reject) => {
        const {horaInicio, horaFin, idHorario, dia} = data;
        try {
            const sql = `CALL update_horario(?, ?, ?, ?)`;
            db.query(sql, [horaInicio, horaFin, idHorario, dia], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al actualizar el horario",
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
                    message: "Error al actualizar el horario",
                    error: error
                }
            });
        }
    })
};

export const eliminar_horario = (id) => {
    return new Promise((resolve, reject) => {
        try {
            const sql = `CALL delete_horario(?)`;
            db.query(sql, [id], (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al eliminar el horario",
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
                    message: "Error al eliminar el horario",
                    error: error
                }
            });
        }
    })
};