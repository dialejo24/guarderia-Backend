import { Router } from "express";
import { crear_horario } from "../controllers/CHorario.js";

const router = Router();
router.post("/crear", async (req, res) => {
    const response = await crear_horario(req.body);
    res.status(200).json(response);
});

export default router;