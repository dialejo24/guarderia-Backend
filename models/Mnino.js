import mongoose from "mongoose";

const ninoSchema = new mongoose.Schema({
    cuidadosEspeciales: {
        type: String,
        required: true,
    },
    enfermedades: {
        type: String,
        required: true,
    },
    numIdentidad: {
        type: String,
        required: true,
    },
    acudiente: {
        type: String,
        required: true,
    },
}, {
    timestamps: false,  
}
);
const Mnino = mongoose.model("nino", ninoSchema);
export default Mnino;