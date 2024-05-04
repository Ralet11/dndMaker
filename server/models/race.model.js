import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Race = sequelize.define('Race', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Race;