import express from "express";
import { db } from "../config.js";

const router = express.Router();

//insert a new client into the database
router.post("/", (resq, response) => {
  try {
    let sql = `CALL insertClient(?, ?, ?, ?, ?, ?, ?, ?)`;
    let userData = [];
    let columns = [
      "cedula",
      "primerNombre",
      "segundoNombre",
      "primerApellido",
      "segundoApellido",
      "sobreNombre",
      "numTelefono",
      "limiteCredito",
    ];
    columns.forEach((column) => {
      let columnValue = resq.body[column];
      userData.push(columnValue ? columnValue : null);
    });

    db.query(sql, userData, (error, results) => {
      if (error) {
        return response
          .status(400)
          .send({ message: "El valor de los campos es invalido" });
      } else {
        return response.status(201).send(results);
      }
    });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

//get all rows from cliente and persona table
router.get("/", (resq, response) => {
  try {
    let sql = "CALL getAllClients()";
    db.query(sql, (error, results) => {
      if (error) {
        return response.status(400).send({ message: error.sqlMessage });
      }
      return response.status(201).send(results);
    });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

//get one row from cliente and persona table by cedula
router.get("/:cedula", (resq, response) => {
  try {
    let sql = "CALL getClientByCedula(?)";
    let cedula = resq.params.cedula;
    db.query(sql, cedula, (error, results) => {
      if (error) throw error;
      return response.status(201).send(results);
    });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

//update one row from cliente and persona table
router.put("/:cedula", (resq, response) => {
  try {
    let sql = "CALL updateCliente(?, ?, ?, ?, ?, ?, ?, ?, ?)";
    let userData = [resq.params.cedula];
    let columns = [
      "primerNombre",
      "segundoNombre",
      "primerApellido",
      "segundoApellido",
      "sobreNombre",
      "numTelefono",
      "limiteCredito",
      "estadoCuentaCli",
    ];
    columns.forEach((column) => {
      let columnValue = resq.body[column];
      userData.push(columnValue ? columnValue : null);
    });

    db.query(sql, userData, (error, results) => {
      if (error) {
        return response.status(404).send({ message: error.sqlMessage });
      }
      return response.status(201).send(results);
    });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

//delete one row from cliente and persona table
router.delete("/:cedula", (resq, response) => {
  try {
    let sql = "CALL deleteCliente(?)";
    let cedula = resq.params.cedula;
    db.query(sql, cedula, (error, results) => {
      if (error) throw error;
      return response.status(201).send(results);
    });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

export default router;
