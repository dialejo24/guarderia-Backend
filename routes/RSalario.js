import { Router } from "express";
import { crear_salario, obtener_salarios, actualizar_salario } from "../controllers/CSalario.js";

const router = Router();

router.post("/crear", async (req, res) => {
    const response = await crear_salario(req.body);
    res.status(200).json(response);
});

router.get("/obtener", async (req, res) => {
    const response = await obtener_salarios();
    res.status(200).json(response);
});

router.put("/actualizar/:id", async (req, res) => {
    const { id } = req.params;
    req.body.idSalario = id;
    const response = await actualizar_salario(req.body);
    res.status(200).json(response);
});

export default router;