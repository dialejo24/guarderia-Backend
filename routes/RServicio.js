import { Router } from "express";
import { crear_servicio, obtener_servicios, actualizar_servicio, eliminar_servicio } from "../controllers/CServicio.js";

const router = Router();

router.post("/crear", async (req, res) => {
    const response = await crear_servicio(req.body);
    res.status(200).json(response);
});

router.get("/obtener", async (req, res) => {
    const response = await obtener_servicios();
    res.status(200).json(response);
});

router.put("/actualizar/:id", async (req, res) => {
    const { id } = req.params;
    req.body.idServicio = id;
    const response = await actualizar_servicio(req.body);
    res.status(200).json(response);
});

router.delete("/eliminar/:id", async (req, res) => {
    const { id } = req.params;
    const response = await eliminar_servicio(id);
    res.status(200).json(response);
});

export default router;