import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

export default defineConfig(({ mode }) => {
  // Carga las variables de entorno según el modo de ejecución (development, production, etc.)
  dotenv.config({ path: `./.env.${mode}` });

  return {
    plugins: [
      react()
    ],
    // Otras configuraciones de Vite...
  };
});