import mongoose from "mongoose";

const aditionalInformationSchema = new mongoose.Schema({
    tipoSangre: {
        type: String,
        required: true,
    },
    genero: {
        type: String,
        required: true,
    },
    numIdentidad: {
        type: String,
        required: true,
    },
    }, {
        timestamps: false,  
    }
);

const MaditionalInformation = mongoose.model("aditionalInformation", aditionalInformationSchema);
export default MaditionalInformation;