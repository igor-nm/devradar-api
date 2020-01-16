import mongoose from "mongoose";

import Point from "./schemas/Point";

const DeveloperSchema = new mongoose.Schema({
    bio: String,
    name: String,
    github: String,
    techs: [String],
    avatar_url: String,
    location: {
        type: Point,
        index: "2dsphere"
    }
});

export default mongoose.model("Developer", DeveloperSchema);
