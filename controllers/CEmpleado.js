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

export const obtenerEmpleados = (request, response) => {
    try {
        const sql = `SELECT * FROM empleadosInfo`;
        db.query(sql, async (error, results) => {
            let res = {};
            if (error) {
                res = {
                    success: false,
                    body: {
                        message: "Error al obtener los empleados",
                        error: error.message,
                    },
                };
                response.status(200).json(res);
            } else {
                for (let i = 0; i < results.length; i++) {
                    const empleado = results[i];
                    const personal = await MaditionalInformation.find({
                        numIdentidad: empleado.numero_identificacion
                    });
                    
                    if (personal.length > 0) {
                        empleado.tipoSangre = personal[0].tipoSangre;
                        empleado.genero = personal[0].genero;
                    }
                    results[i] = empleado;
                }
                res = {
                    success: true,
                    body: results,
                };
                response.status(200).json(res);
            }
        });
    }
    catch (error) {
        const res = {
            success: false,
            body: {
                message: "Error al obtener los empleados",
                error: error.message,
            },
        };
        response.status(200).json(res);
    }
};

export const actualizarEmpleado = (data, response) => {
    const { numIdentidad, idRol } = data;
    try {
        let sql = `CALL update_empleado(?, ?)`;
        const userData = [
            numIdentidad,
            idRol
        ];
        db.query(sql, userData, async (error, results) => {
            let res = {};
            if (error) {
                res = {
                    success: false,
                    body: {
                        message: "Error al actualizar el empleado",
                        error: error.message,
                    },
                };
                response.status(200).json(res);
                return;
            }
            res = {
                success: true,
                body: results,
            };
            response.status(200).json(res);
        });
    } catch (error) {
        const res = {
            success: false,
            body: {
                message: "Error al actualizar el empleado",
                error: error.message,
            },
        };
        response.status(200).json(res);
    }
};