import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import http from 'http'; // Importa el módulo HTTP de Node.js
import { Server } from 'socket.io'; // Importa el servidor de Socket.IO
import { FRONTEND_URL } from './config.js';
import routerUser from './routes/user.router.js';
import routerCharacters from './routes/characters.routes.js';
import routerItems from './routes/items.router.js';

const app = express();

const corsOptions = {
  origin: FRONTEND_URL,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/api/user/', routerUser);
app.use('/api/character/', routerCharacters);
app.use('/api/items/', routerItems);

// Crear el servidor HTTP utilizando Express
const server = http.createServer(app);

// Configurar Socket.IO para usar el mismo servidor HTTP
const io = new Server(server, {
  cors: {
    origin: FRONTEND_URL,
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

// Manejar conexiones WebSocket
io.on('connection', (socket) => {
  console.log('Usuario conectado');

  // Manejar eventos aquí
  
  socket.on('disconnect', () => {
    console.log('Usuario desconectado');
  });
});

export { server, io };