import { Router } from "express";
import { crear_horario, obtener_horarios, actualizar_horario, eliminar_horario } from "../controllers/CHorario.js";

const router = Router();
router.post("/crear", async (req, res) => {
    const response = await crear_horario(req.body);
    res.status(200).json(response);
});

router.get("/obtener", async (req, res) => {
    const response = await obtener_horarios();
    res.status(200).json(response);
});

router.put("/actualizar/:id", async (req, res) => {
    const { id } = req.params;
    req.body.idHorario = id;
    const response = await actualizar_horario(req.body);
    res.status(200).json(response);
});

router.delete("/eliminar/:id", async (req, res) => {
    const { id } = req.params;
    const response = await eliminar_horario(id);
    res.status(200).json(response);
});

export default router;