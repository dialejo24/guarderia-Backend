import { Router } from "express";
import { crear_inscripcion, obtener_inscripciones, actualizar_inscripcion, eliminar_inscripcion } from "../controllers/CInscripcion.js";

const router = Router();

router.post("/crear", async (req, res) => {
    const response = await crear_inscripcion(req.body);
    res.status(200).json(response);
});

router.get("/obtener", async (req, res) => {
    const response = await obtener_inscripciones();
    res.status(200).json(response);
});

router.put("/actualizar/:id", async (req, res) => {
    const { id } = req.params;
    req.body.idInscripcion = id;
    const response = await actualizar_inscripcion(req.body);
    res.status(200).json(response);
});

router.delete("/eliminar/:id", async (req, res) => {
    const { id } = req.params;
    const response = await eliminar_inscripcion(id);
    res.status(200).json(response);
});

export default router;