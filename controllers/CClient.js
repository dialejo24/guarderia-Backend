import { db } from "../config.js";
import MaditionalInformation from "../models/MaditionalInformation.js";
import Mpadre from "../models/MPadre.js";
import Mnino from "../models/Mnino.js";

export const registrar_padre = (data) => {
    return new Promise((resolve, reject) => {
        const { identificacion, fechaExpedicion, nombre, edad, telefono, direccion, correo, tipoSangre, genero } = data;
        try {
            const sql = `CALL crear_persona(?,?,?,?)`;
            db.query(sql, [identificacion, fechaExpedicion, nombre, edad], async (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al insertar el padre",
                            error: error.message
                        }
                    });
                    return;
                }
                const aditionalInfo = new MaditionalInformation({
                    numIdentidad: identificacion,
                    tipoSangre,
                    genero,
                });
                await aditionalInfo.save();
                const padre = new Mpadre({
                    numIdentidad: identificacion,
                    telefono,
                    direccion,
                    correoElectronico: correo,
                });
                await padre.save();

            });

        } catch (error) {
            resolve({
                success: false,
                body: {
                    message: "Error al crear el padre",
                    error: error
                }
            });

        }
    });
};

export const registrar_nino = (data) => {
    return new Promise((resolve, reject) => {
        const { identificacion, fechaExpedicion, nombre, edad, enfermedades, cuidadosEspeciales, acudiente, tipoSangre, genero } = data;
        try {
            const sql = `CALL crear_persona(?,?,?,?)`;
            db.query(sql, [identificacion, fechaExpedicion, nombre, edad], async (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al insertar el niño",
                            error: error.message
                        }
                    });
                    return;
                }
                const aditionalInfo = new MaditionalInformation({
                    numIdentidad: identificacion,
                    tipoSangre,
                    genero,
                });
                await aditionalInfo.save();
                const nino = new Mnino({
                    enfermedades,
                    cuidadosEspeciales,
                    acudiente,
                    numIdentidad: identificacion,
                });
                await nino.save();
            });
        } catch (error) {
            resolve({
                success: false,
                body: {
                    message: "Error al crear el niño",
                    error: error
                }
            });
        }
    });
};