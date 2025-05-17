import express from "express";
import { PORT, db } from "./config.js";
import REmpleado from "./routes/REmpleado.js";
import RRol from "./routes/RRol.js";
import RSalario from "./routes/RSalario.js"
import RSede from "./routes/RSede.js";
import RContrato from "./routes/RContrato.js";
import RHorario from "./routes/RHorario.js";
import RPlan from "./routes/RPlan.js";
import RClient from "./routes/RClient.js";
import RInscripcion from "./routes/RInscripcion.js";
import RServicio from "./routes/RServicio.js";
import RFactura from "./routes/RFactura.js";
import RAdicion from "./routes/RAdicion.js";
import mongoose from "./mongoDB.js";
import cors from "cors";

const app = express();
app.use(express.json());


app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  }));
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'DELETE', 'PUT'],
//     allowedHeaders: ['Content-Type']
// }));

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("it's working");
});


app.use("/empleado", REmpleado);
app.use("/rol", RRol);
app.use("/salario", RSalario);
app.use("/sede", RSede);
app.use("/contrato", RContrato);
app.use("/horario", RHorario);
app.use("/plan", RPlan);
app.use("/cliente", RClient);
app.use("/inscripcion", RInscripcion);
app.use("/servicio", RServicio);
app.use("/factura", RFactura);
app.use("/adicion", RAdicion);

db.connect((error) => {
  if (error) {
    console.log(error);
    return;
  }

  app.listen(PORT, () => {
    console.log("app is listening");
  });

  console.log("connected MYSQL");
});
