import { Router } from "express";
import { obtener_facturas } from "../controllers/CFactura.js";

const router = Router();

router.get("/obtener", async (req, res) => {
    const response = await obtener_facturas();
    res.status(200).json(response);
});

export default router;