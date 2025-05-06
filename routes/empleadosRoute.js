import express from "express";
import { db } from "../config.js";

const router = express.Router();

// insert a new employee
router.post("/", (request, response) => {
    let sql = "CALL insertEmpleado(?, ?, ?, ?, ?, ?, ?)";
    let userData = [];
    let columns = [
      "cedula",
      "primerNombre",
      "segundoNombre",
      "primerApellido",
      "segundoApellido",
      "numTelefono",
      "comisionPorVenta",
    ];
    columns.forEach((column) => {
        let columnValue = request.body[column];
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
})

//get all employees from empleado table
router.get("/", (request, response) => {
  let sql = "CALL getAllEmployees()";
  db.query(sql, (error, results) => {
    if (error) {
      return response.status(400).send({message: error.sqlMessage});

    } else {
      return response.status(201).send(results);
    }
  })
})

router.post("/consultarComision", (request, response) => {
  let cedulaEmp = request.body.cedulaEmp;
  let date = request.body.date;
  let sql = `SELECT c.cuenta * c.comisionPorventa AS totalComision FROM comisionEmployees c WHERE
  c.cedulaEmp = ? AND c.fechaVenta = ?`;
  db.query(sql, [cedulaEmp, date], (error, results) => {
    if (error) {
      return response.status(400).send({message: error.sqlMessage});
    }

    return response.status(201).send(results);
  })
})

//get one employee
router.get("/:cedula", (request, response) => {
  let sql = 'CALL getEmployee(?)';
  db.query(sql, request.params.cedula, (error, results) => {
    if (error) {
      return response.status(400).send({message: error.sqlMessage});
    }

    return response.status(201).send(results);
  })
})

router.put("/:cedula", (request, response) => {
  let sql = "CALL updateEmployee(?, ?, ?, ?, ?, ?, ?)";
  let userData = [request.params.cedula];
  let columns = [
    "primerNombre",
    "segundoNombre",
    "primerApellido",
    "segundoApellido",
    "numTelefono",
    "comisionPorVenta",
  ];
  columns.forEach((column) => {
      let columnValue = request.body[column];
      userData.push(columnValue ? columnValue : null);
  });

  db.query(sql, userData, (error, results) => {
    if (error) {
      return response.status(400).send({message: error.sqlMessage});
    }

    return response.status(201).send(results);
  })

});

router.delete("/:cedula", (request, response) => {
  let sql = `DELETE FROM empleado e WHERE e.cedulaEmp = ${request.params.cedula}`;
  db.query(sql, (error, results) => {
    if (error) {
      return response.status(400).send({message: error.sqlMessage});
    }

    return response.status(201).send(results);
  })
})


export default router;