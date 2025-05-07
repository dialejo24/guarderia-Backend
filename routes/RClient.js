import { Router } from "express";
import { registrar_nino, registrar_padre } from "../controllers/CClient.js";

const router = Router();

router.post("/registrarPadre", async (req, res) => {
    const response = await registrar_padre(req.body);
    res.status(200).json(response);
});
router.post("/registrarNino", async (req, res) => {
    const response = await registrar_nino(req.body);
    res.status(200).json(response);
});

export default router;