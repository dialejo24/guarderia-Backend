import { db } from "../config.js";

export const obtener_facturas = () => {
    return new Promise((resolve, reject) => {
        try {
            const sql = `SELECT * FROM facturasInfo`;
            db.query(sql, (error, results) => {
                if (error) {
                    resolve({
                        success: false,
                        body: {
                            message: "Error al obtener las facturas",
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
                    message: "Error al obtener las facturas",
                    error: error
                }
            });
        }
    }
    )
};