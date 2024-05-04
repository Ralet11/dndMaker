// item.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Item = sequelize.define('Item', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subtype: {
        type: DataTypes.STRING
    },
    bonus: {
        type: DataTypes.JSON
    },
    img: {
        type: DataTypes.STRING
    }
});

export default Item;
