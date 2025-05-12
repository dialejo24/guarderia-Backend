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

export const obtener_padres = () => {
    return new Promise((resolve, reject) => {
        try {
            const sql = `SELECT * FROM persona`;
            db.query(sql, async (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al obtener los padres",
                            error: error.message
                        }
                    });
                    return;
                }
                const data = [];
                for (let i = 0; i < results.length; i++) {
                    const persona = results[i];
                    const padre = await Mpadre.findOne({ numIdentidad: persona.numero_identificacion });
                    if (padre) {
                        const aditionalInfo = await MaditionalInformation.findOne({ numIdentidad: persona.numero_identificacion });
                        
                        data.push({
                            ...persona,
                            telefono: padre.telefono,
                            direccion: padre.direccion,
                            correoElectronico: padre.correoElectronico,
                            tipoSangre: aditionalInfo?.tipoSangre || "",
                            genero: aditionalInfo?.genero || "",
                        });
                    }
                }
                resolve({
                    success: true,
                    body: data
                });
            });
        } catch (error) {
            resolve({
                success: false,
                body: {
                    message: "Error al obtener los padres",
                    error: error
                }
            });
        }
    });
};

export const obtener_ninos = () => {
    return new Promise((resolve, reject) => {
        try {
            const sql = `SELECT * FROM persona`;
            db.query(sql, async (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al obtener los niños",
                            error: error.message
                        }
                    });
                    return;
                }
                const data = [];
                for (let i = 0; i < results.length; i++) {
                    const persona = results[i];
                    const nino = await Mnino.findOne({ numIdentidad: persona.numero_identificacion });
                    if (nino) {
                        const aditionalInfo = await MaditionalInformation.findOne({ numIdentidad: persona.numero_identificacion });
                        
                        data.push({
                            ...persona,
                            enfermedades: nino.enfermedades,
                            cuidadosEspeciales: nino.cuidadosEspeciales,
                            acudiente: nino.acudiente,
                            tipoSangre: aditionalInfo?.tipoSangre || "",
                            genero: aditionalInfo?.genero || "",
                        });
                    }
                }
                resolve({
                    success: true,
                    body: data
                });
            });
        } catch (error) {
            resolve({
                success: false,
                body: {
                    message: "Error al obtener los niños",
                    error: error
                }
            });
        }
    });
};