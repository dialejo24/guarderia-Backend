import { Router } from "express";
import { crear_sede, obtener_sedes, actualizar_sede, eliminar_sede } from "../controllers/CSede.js";

const router = Router();

router.post("/crear", async (req, res) => {
    const response = await crear_sede(req.body);
    res.status(200).json(response);
});

router.get("/obtener", async (req, res) => {
    const response = await obtener_sedes();
    res.status(200).json(response);
});

router.put("/actualizar/:id", async (req, res) => {
    const { id } = req.params;
    req.body.id_sede = id;
    const response = await actualizar_sede(req.body);
    res.status(200).json(response);
});

router.delete("/eliminar/:id", async (req, res) => {
    const { id } = req.params;
    const response = await eliminar_sede(id);
    res.status(200).json(response);
});

export default router;