import { Router } from "express";
import { registrarEmpleado, obtenerEmpleados, actualizarEmpleado } from "../controllers/CEmpleado.js";
const router = Router();

router.post("/registrar", async (req, res) => {
    registrarEmpleado(req.body, res);
});

router.get("/obtener", async (req, res) => {
    obtenerEmpleados(req.body, res);
});

router.put("/actualizar/:id", async (req, res) => {
    const { id } = req.params;
    req.body.numIdentidad = id;
    actualizarEmpleado(req.body, res);
});

export default router;