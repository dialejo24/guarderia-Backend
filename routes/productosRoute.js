import express from "express";
import { db } from "../config.js";

const router = express.Router();

//insert a new product
router.post("/", (request, response) => {
  try {
    let sql = `CALL insertProduct(?, ?, ?, ?, ?)`;
    let userData = [];
    let columns = [
      "nombreProducto",
      "descripcionProducto",
      "precioProducto",
      "tipoProducto",
      "marcaProducto",
    ];
    columns.forEach((column) => {
      let columnValue = request.body[column];
      userData.push(columnValue ? columnValue : null);
    });

    db.query(sql, userData, (error, results) => {
      if (error) {
        return response
          .status(400)
          .send({ message: error.sqlMessage });
      } else {
        return response.status(201).send(results);
      }
    });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

//get all products from product table
router.get("/", (request, response) => {
  try {
    let sql = `SELECT producto.productoId, producto.nombreProducto, producto.descripcionProducto, 
    producto.precioProducto, producto.tipoProducto, producto.marcaProducto FROM 
    producto ORDER BY producto.productoId DESC`;
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

router.get("/lastId", (request, response) => {
  let sql = 'SELECT getLastInsertedId() AS id';
  db.query(sql, (error, results) => {
    if (!error) {
      return response.status(201).send(results);
    }
  })
})

//get one product from product table that matches idProduct
router.get("/:productoId", (request, response) => {
  try {
    let sql = `SELECT producto.nombreProducto, producto.descripcionProducto, producto.precioProducto,
        producto.tipoProducto, producto.marcaProducto FROM producto WHERE producto.productoId = ?
        ORDER BY producto.nombreProducto ASC`;
    let idProducto = request.params.productoId;
    db.query(sql, idProducto, (error, results) => {
      if (error) throw error;
      return response.status(201).send(results);
    });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

//update the products from product table that matches productoId
router.put("/:productoId", (request, response) => {
  try {
    let sql = `UPDATE producto p SET p.nombreProducto = ?, p.descripcionProducto = ?,
    p.precioProducto = ?, p.tipoProducto = ?, p.marcaProducto = ?
    WHERE p.productoId = ?`;
    let userData = [];
    let columns = [
      "nombreProducto",
      "descripcionProducto",
      "precioProducto",
      "tipoProducto",
      "marcaProducto",
    ];
    columns.forEach((column) => {
      let columnValue = request.body[column];
      userData.push(columnValue ? columnValue : null);
    });

    userData.push(request.params.productoId);
    db.query(sql, userData, (error, results) => {
      if (error) {
        return response.status(400).send({ message: error.sqlMessage });
      } else {
        return response.status(201).send(results);
      }
    });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

export default router;
