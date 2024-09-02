import app from "./app";
import "dotenv/config";
import { connectDatabase } from "./database";

const { PORT } = process.env;
connectDatabase();
app.listen(PORT);
console.log(`Servidor corriendo en http://localhost:${PORT}`);
