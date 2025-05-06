import express from "express";
import { db } from "../config.js";

const router = express.Router();

router.post("/", (request, response) => {
    let sql = "CALL insertAbono(?, ?)";
    db.query(sql, [request.body.cedulaCli, request.body.valorAbono], (error, results) => {
        if (error) {
            return response.status(400).send({message: error.sqlMessage});
        }

        return response.status(201).send(results);
    })
})

export default router;