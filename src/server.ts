import express from "express";
import swaggerUI from "swagger-ui-express";

import { route } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(route);

app.listen(3333, () => console.log("Server is running on port 3333!"));
