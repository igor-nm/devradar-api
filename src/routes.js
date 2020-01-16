import { Router } from "express";

import DeveloperController from "./controllers/DeveloperController";
import SearchController from "./controllers/SearchController";

const routes = Router();

routes.get("/devs", DeveloperController.index);
routes.post("/devs", DeveloperController.store);

routes.get("/search", SearchController.index);

export default routes;
