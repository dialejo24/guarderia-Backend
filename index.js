import express from "express";
import { PORT, db } from "./config.js";
import clientesRoute from "./routes/clientesRoute.js";
import productosRoute from "./routes/productosRoute.js";
import empleadosRoute from "./routes/empleadosRoute.js";
import ventasRoute from "./routes/ventasRoute.js";
import abonosRoute from "./routes/abonosRoute.js";
import cors from "cors";
import { mongodbURL } from "./config.js";
import mongoose from "mongoose";
import multer from "multer";

const app = express();
app.use(express.json());


app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'DELETE', 'PUT'],
//     allowedHeaders: ['Content-Type']
// }));

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("it's working");
});

app.use("/cliente", clientesRoute);
app.use("/producto", productosRoute);
app.use("/empleado", empleadosRoute);
app.use("/venta", ventasRoute);
app.use("/abono", abonosRoute);

db.connect((error) => {
  if (error) {
    console.log("there's an error");
    return;
  }

  app.listen(PORT, () => {
    console.log("app is listening");
  });

  console.log("connected MYSQL");
});


//mongo connection
mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("app conected");
  })
  .catch((error) => {
    console.log(error);
  });

const imageSchema = new mongoose.Schema({
    filename: String,
    contentType: String,
    imageBase64: String,
    productoId: Number
});

const Image = mongoose.model('Image', imageSchema);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/productoImagen', upload.single('image'), async (request, response) => {
    const img = request.file;
    if (!img) {
        return response.status(400).send('No file uploaded.');
    }
    console.log(img);
    
    const newImage = new Image({
        filename: img.originalname,
        contentType: img.mimetype,
        imageBase64: img.buffer.toString('base64'),
        productoId: request.body.id
    });

    try {
        await newImage.save();
        response.status(200).send(newImage._id);
    } catch (err) {
        response.status(500).send('Error saving image.');
    }
})

app.get('/productoImagen/:id', async (request, response) => {
    try {
        const image = await Image.findOne({productoId: request.params.id});
        if (!image) {
            return response.status(404).send('Image not found.');
        }

        response.set('Content-Type', image.contentType);
        response.send(Buffer.from(image.imageBase64, 'base64'));
    } catch (err) {
        response.status(500).send('Error retrieving image.');
    }
})
