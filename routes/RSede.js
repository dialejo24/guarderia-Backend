import { Router } from "express";
import { crear_sede } from "../controllers/CSede.js";

const router = Router();

router.post("/crear", async (req, res) => {
    const response = await crear_sede(req.body);
    res.status(200).json(response);
});

export default router;