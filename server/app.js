import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { FRONTEND_URL } from './config.js';
import routerUser from './routes/user.router.js';
import routerCharacters from './routes/characters.routes.js';
import routerItems from './routes/items.router.js';



const app = express()

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


export default app