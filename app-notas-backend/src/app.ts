import express from "express";
import cors from "cors";
import morgan from "morgan";

import notesRoutes from "./routes";

// Creacion de la aplicacion express y configuracion de middlewares
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Configuracion de rutas
app.use("/api", notesRoutes); // /api/notes

export default app;
