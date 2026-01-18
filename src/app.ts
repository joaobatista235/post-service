import express from "express";
import helmet from "helmet";
import routes from "@/routes";
import { setupSwagger } from "@/swagger";

const app = express();
app.use(helmet());
app.use(express.json());
app.use("/api", routes);

// Swagger
setupSwagger(app);

export default app;
