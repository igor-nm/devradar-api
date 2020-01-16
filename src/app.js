import express from "express";
import mongoose from "mongoose";

import routes from "./routes";

class App {
    constructor() {
        this.server = express();

        mongoose.connect(
            "mongodb+srv://admin:admin@devradar-db-smxnj.mongodb.net/database?retryWrites=true&w=majority",
            {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );

        this.middlwares();
        this.routes();
    }

    middlwares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}

const app = new App();
export default app.server;
