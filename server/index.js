import sequelize from './database.js';
import { server } from './app.js'; // Importa el servidor HTTP

sequelize.sync({ force: false })
  .then(async () => {
    console.log('Modelos sincronizados con la base de datos.');

    const port = 80;
    server.listen(port, () => { // Utiliza el servidor HTTP configurado con Express y Socket.IO
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar modelos con la base de datos:', error);
  });