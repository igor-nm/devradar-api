import axios from "axios";

import Developer from "../models/Developer";
import { stringAsArray } from "../services/parserFunctions";

class DeveloperController {
    async index(request, response) {
        const developers = await Developer.find();

        if (developers.length === 0) {
            return response.status(204).json();
        }

        return response.json(developers);
    }

    async store(request, response) {
        const { github, techs, latitude, longitude } = request.body;

        const developerExists = await Developer.findOne({
            github
        });

        if (developerExists) {
            return response.status(403).json({
                error: "Developer already exists!"
            });
        }

        const { data: github_data } = await axios.get(`https://api.github.com/users/${github}`);

        const { bio, name = github, avatar_url } = github_data;

        const techs_array = stringAsArray(techs);

        const location = {
            type: "Point",
            coordinates: [longitude, latitude]
        };

        const developer = await Developer.create({
            bio,
            name,
            github,
            location,
            avatar_url,
            techs: techs_array
        });

        return response.json(developer);
    }
}

export default new DeveloperController();
