/* ============================================================
   AREA DE IMPORTACION
   ============================================================ */
import express from 'express';
import dotenv from 'dotenv';
import dayjs from 'dayjs';
import logger from './middlewares/logger.middleware.js';
import usuariosRoutes from './routes/usuarios.routes.js';

/* ============================================================
   CONFIGURACION
   ============================================================ */
dotenv.config();
const puertoENV = process.env.PORT || 4000;
const now = dayjs();

/* ============================================================
   SERVIDOR + MIDDLEWARES
   ============================================================ */
const app = express();
app.use(express.json());
app.use(logger);

/* ============================================================
   RUTAS
   ============================================================ */
app.get('/', (req, res) => res.send('hola soy el get'));
app.use('/usuarios', usuariosRoutes);

/* ============================================================
   INICIO
   ============================================================ */
app.listen(puertoENV, () => {
  console.log(`👌*********************************************`);
  console.log(`✅ Servidor corriendo en http://localhost:${puertoENV}`);
  console.log(`❌**************Ctrl+C para salir**************`);
  console.log(`***********************************************`);
  console.log(`**📅 last update: ${now.format('dddd YYYY-MM-DD HH:mm:ss')}**`);
});
/* url para postman: http://localhost:3000/usuarios/login 
http cats codigos de mensaje
*/