import MaditionalInformation from "../models/MaditionalInformation.js";
import { db } from "../config.js";

export const registrarEmpleado = (data, response) => {
    const { numIdentidad, idRol, fechaExpedicion, nombre = null, edad = null, tipoSangre, genero } = data;
    try {
        let sql = `SELECT numero_identificacion FROM persona WHERE numero_identificacion = ${numIdentidad}`;
        db.query(sql, (error, results) => {
            let res = {};
            if (error) {
                res = {
                    success: false,
                    body: {
                        message: "Error al verificar la existencia del empleado",
                        error: error.message,
                    },
                };
                response.status(200).json(res);
            } else if (results.length > 0) {
                res = {
                    success: false,
                    body: {
                        message: "El empleado ya existe",
                    },
                };
                response.status(200).json(res);
            } else {
                sql = `CALL registrar_empleado(?, ?, ?, ?, ?)`;
                const userData = [
                    numIdentidad,
                    fechaExpedicion,
                    nombre,
                    edad,
                    idRol,
                ];
                db.query(sql, userData, async (error, results) => {
                    if (error) {
                        res = {
                            success: false,
                            body: {
                                message: "Error al registrar el empleado",
                                error: error.message,
                            },
                        };
                        response.status(200).json(res);
                        return;
                    }
                    const aditionalInfo = new MaditionalInformation({
                        numIdentidad,
                        tipoSangre,
                        genero,
                    });
                    await aditionalInfo.save();
                    response.status(200).json({
                        success: true,
                        body: results,
                    });
                });
            }
        });

    } catch (error) {
        const res = {
            success: false,
            body: {
                message: "Error al registrar el empleado",
                error: error.message,
            },
        };
        response.status(200).json(res);
    }
};