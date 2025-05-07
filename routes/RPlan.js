import { Router } from "express";
import { crear_plan } from "../controllers/CPlan.js";

const router = Router();

router.post("/crear", async (req, res) => {
    const response = await crear_plan(req.body);
    res.status(200).json(response);
});

export default router;