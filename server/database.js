import { Sequelize } from 'sequelize';
import {DB_HOST, FRONTEND_URL, DB_DATABASE, DB_USER,DB_PASSWORD } from './config.js'

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  logging: false,
});



export default sequelize;