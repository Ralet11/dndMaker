import sequelize from './database.js';
import app from './app.js';


sequelize.sync({ force: false })
  .then(async () => {
    console.log('Modelos sincronizados con la base de datos.');

    
     const port = 80;
    app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    }); 
  }) 
  .catch((error) => {
    console.error('Error al sincronizar modelos con la base de datos:', error);
  });