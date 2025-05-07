import { Router } from "express";
import { crear_contrato, agregar_aumento_salarial } from "../controllers/CContrato.js";

const router = Router();
router.post("/crear", async (req, res) => {
    const response = await crear_contrato(req.body);
    res.status(200).json(response);
});

router.post("/agregarAumento", async (req, res) => {
    const response = await agregar_aumento_salarial(req.body);
    res.status(200).json(response);
});


export default router;