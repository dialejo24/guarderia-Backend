import { Router } from "express";
import { crearRol } from "../controllers/CRol.js";

const router = Router();

router.post("/crear", async (req, res) => {
    crearRol(req.body, res);
});

export default router;