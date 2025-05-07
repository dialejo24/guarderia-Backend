import { Router } from "express";
import { registrarEmpleado } from "../controllers/CEmpleado.js";
const router = Router();

router.post("/registrar", async (req, res) => {
    registrarEmpleado(req.body, res);
});

export default router;