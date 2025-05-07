import { Router } from "express";
import { crear_salario } from "../controllers/CSalario.js";

const router = Router();

router.post("/crear", async (req, res) => {
    const response = await crear_salario(req.body);
    res.status(200).json(response);
});

export default router;