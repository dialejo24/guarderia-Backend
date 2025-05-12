import { Router } from "express";
import { crearRol, obtenerRoles, actualizarRol, eliminarRol } from "../controllers/CRol.js";

const router = Router();

router.post("/crear", async (req, res) => {
    crearRol(req.body, res);
});

router.get("/obtener", async (req, res) => {
    obtenerRoles(res);
});

router.put("/actualizar/:id", async (req, res) => {
    const { id } = req.params;
    req.body.id = id;
    actualizarRol(req.body, res);
});

router.delete("/eliminar/:id", async (req, res) => {
    eliminarRol(req.params, res);
});

export default router;