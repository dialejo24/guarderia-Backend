import mongoose from "mongoose";

const padreSchema = new mongoose.Schema({
    numIdentidad: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    correoElectronico: {
        type: String,
        required: true,
    },
}, {
    timestamps: false,
}
);
const Mpadre = mongoose.model("padre", padreSchema);
export default Mpadre;