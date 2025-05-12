import { Router } from "express";
import { crear_contrato, agregar_aumento_salarial, obtener_contratos,
    eliminar_contrato, eliminar_aumento_salarial, actualizar_aumento_salarial
 } from "../controllers/CContrato.js";

const router = Router();
router.post("/crear", async (req, res) => {
    const response = await crear_contrato(req.body);
    res.status(200).json(response);
});

router.post("/agregarAumento", async (req, res) => {
    const response = await agregar_aumento_salarial(req.body);
    res.status(200).json(response);
});

router.get("/obtener", async (req, res) => {
    const response = await obtener_contratos();
    res.status(200).json(response);
});

router.delete("/eliminar/:idContrato", async (req, res) => {
    const { idContrato } = req.params;
    const response = await eliminar_contrato(idContrato);
    res.status(200).json(response);
});

router.delete("/eliminarAumento/:idAumento", async (req, res) => {
    const { idAumento } = req.params;
    const response = await eliminar_aumento_salarial(idAumento);
    res.status(200).json(response);
});

router.put("/actualizarAumento/:idAumento", async (req, res) => {
    const { idAumento } = req.params;
    req.body.idAumento = idAumento;
    const response = await actualizar_aumento_salarial(req.body);
    res.status(200).json(response);
});


export default router;