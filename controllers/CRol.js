import { db } from "../config.js";

export const crearRol = (data, response) => {
    const { rol, funcion } = data;
    try {
        const sql = `CALL crear_rol(?, ?)`;
        db.query(sql, [rol, funcion], (error, results) => {
            if (error) {
                response.status(200).json({
                    success: false,
                    body: {
                        message: "Error al crear el rol",
                        error: error.message,
                    },
                });
                return;
            }
            
            response.status(200).json({
                success: true,
                body: results,
            });
        })
    } catch (error) {
        response.status(200).json({
            success: false,
            body: {
                message: "Error al crear el rol",
                error: error.message,
            },
        });
    }
};

export const obtenerRoles = (response) => {
    try {
        const sql = `SELECT * FROM rolesInfo`;
        db.query(sql, (error, results) => {
            if (error) {
                response.status(200).json({
                    success: false,
                    body: {
                        message: "Error al obtener los roles",
                        error: error.message,
                    },
                });
                return;
            }
            
            response.status(200).json({
                success: true,
                body: results,
            });
        })
    } catch (error) {
        response.status(200).json({
            success: false,
            body: {
                message: "Error al obtener los roles",
                error: error.message,
            },
        });
    }
};

export const actualizarRol = (data, response) => {
    const { id, rol, funcion } = data;
    try {
        const sql = `CALL update_rol(?, ?, ?)`;
        db.query(sql, [id, rol, funcion], (error, results) => {
            if (error) {
                response.status(200).json({
                    success: false,
                    body: {
                        message: "Error al actualizar el rol",
                        error: error.message,
                    },
                });
                return;
            }
            
            response.status(200).json({
                success: true,
                body: results,
            });
        })
    } catch (error) {
        response.status(200).json({
            success: false,
            body: {
                message: "Error al actualizar el rol",
                error: error.message,
            },
        });
    }
};

export const eliminarRol = (data, response) => {
    const { id } = data;
    console.log(id);
    try {
        const sql = `CALL delete_rol(?)`;
        db.query(sql, [id], (error, results) => {
            if (error) {
                response.status(200).json({
                    success: false,
                    body: {
                        message: "Error al eliminar el rol",
                        error: error.message,
                    },
                });
                return;
            }
            
            response.status(200).json({
                success: true,
                body: results,
            });
        })
    } catch (error) {
        response.status(200).json({
            success: false,
            body: {
                message: "Error al eliminar el rol",
                error: error.message,
            },
        });
    }
};