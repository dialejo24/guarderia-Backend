import { Router } from "express";
import {crear_adicion, obtener_adiciones, actualizar_adicion, eliminar_adicion,
    insertar_servicio_adicion, eliminar_servicio_adicion
} from "../controllers/CAdicion.js"

const router = Router();

router.post("/crear", async (req, res) => {
    const response = await crear_adicion(req.body);
    res.status(200).json(response);
});

router.post("/crearServicioAdicion", async (req, res) => {
    const response = await insertar_servicio_adicion(req.body);
    res.status(200).json(response);
});

router.get("/obtener", async (req, res) => {
    const response = await obtener_adiciones();
    res.status(200).json(response);
});

router.put("/actualizar/:id", async (req, res) => {
    const { id } = req.params;
    req.body.idAdicion = id;
    const response = await actualizar_adicion(req.body);
    res.status(200).json(response);
});

router.delete("/eliminar/:id", async (req, res) => {
    const { id } = req.params;
    const response = await eliminar_adicion(id);
    res.status(200).json(response);
});

router.delete("/eliminarServicioAdicion/:id", async (req, res) => {
    const { id } = req.params;
    const response = await eliminar_servicio_adicion(id);
    res.status(200).json(response);
});

export default router;