import express from "express";
import { db } from "../config.js";

const router = express.Router();

router.post("/", (request, response) => {
    let sql = "CALL insertVentaCredito(?, ?)";
    let values = [request.body.cedulaCli, request.body.cedulaEmp];
    db.query(sql, values, (error, result) => {
        if (error) {
            return response.status(400).send({message: error.sqlMessage});
        }

        return response.status(201).send(result);
    })
})

router.post("/producto", (request, response) => {
    let sql = "CALL insertVentaProducto(?, ?)";
    let values = [request.body.productoId, request.body.cantidadProducto];
    db.query(sql, values, (error, result) => {
        if (error) {
            return response.status(400).send({message: error.sqlMessage});
        }

        return response.status(201).send(result);
    })
});

router.post("/validar", (request, response) => {
    let sql = "SELECT verificarEstadoCuenta(?, ?) as estado";
    let values = [request.body.cedulaCli, request.body.totalVenta];
    db.query(sql, values, (error, results) => {
        if (error) {
            return response.status(400).send({message: error.sqlMessage});
        }

        return response.status(201).send(results);
    })
})

router.get("/", (request, response) => {
    let sql = "SELECT * FROM ventaInfo";
    db.query(sql, (error, results) => {
        if (error) {
            return response.status(400).send({message: error.sqlMessage});
        }

        return response.status(201).send(results);
    })
})

router.get("/:idVenta", (request, response) => {
    let sql = "CALL getRegistrosVenta(?)";
    console.log(request.params.idVenta);
    db.query(sql, request.params.idVenta, (error, results) => {
        if (error) {
            return response.status(400).send({message: error.sqlMessage});
        }

        return response.status(201).send(results);
    })
})

export default router;