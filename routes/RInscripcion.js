import { Router } from "express";
import { crear_inscripcion } from "../controllers/CInscripcion.js";

const router = Router();

router.post("/crear", async (req, res) => {
    const response = await crear_inscripcion(req.body);
    res.status(200).json(response);
});

export default router;