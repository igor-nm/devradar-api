import Developer from "../models/Developer";
import { stringAsArray } from "../services/parserFunctions";

class SearchController {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query;

        const techs_array = stringAsArray(techs);

        const developers = await Developer.find({
            techs: {
                $in: techs_array
            },
            location: {
                $near: {
                    $maxDistance: 10000,
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude]
                    }
                }
            }
        });

        if (developers.length === 0) {
            return response.status(204).json();
        }

        return response.json(developers);
    }
}

export default new SearchController();
