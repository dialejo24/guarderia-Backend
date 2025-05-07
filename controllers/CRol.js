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