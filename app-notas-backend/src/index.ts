import app from "./app";
import "dotenv/config";
import { connectDatabase } from "./database";

// Establece el puerto desde las variables de entorno o usa 5000 por defecto
const PORT = process.env.PORT || 5000;

// Conecta la base de datos
connectDatabase();

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
