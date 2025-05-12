import { Router } from "express";
import { crear_plan, obtener_planes, actualizar_plan, eliminar_plan } from "../controllers/CPlan.js";

const router = Router();

router.post("/crear", async (req, res) => {
    const response = await crear_plan(req.body);
    res.status(200).json(response);
});

router.get("/obtener", async (req, res) => {
    const response = await obtener_planes();
    res.status(200).json(response);
});

router.put("/actualizar/:idPlan", async (req, res) => {
    const { idPlan } = req.params;
    req.body.idPlan = idPlan;
    const response = await actualizar_plan(req.body);
    res.status(200).json(response);
});

router.delete("/eliminar/:idPlan", async (req, res) => {
    const { idPlan } = req.params;
    const response = await eliminar_plan(idPlan);
    res.status(200).json(response);
});

export default router;