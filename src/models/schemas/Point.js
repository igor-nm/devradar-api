import mongoose from "mongoose";

const PointSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ["Point"]
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

export default PointSchema;
