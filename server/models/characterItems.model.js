import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import Character from './characters.model.js';
import Item from './items.model.js';

const CharacterItem = sequelize.define('CharacterItem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    characterId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    itemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    equipped: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
});

CharacterItem.belongsTo(Character, { foreignKey: 'characterId' });
CharacterItem.belongsTo(Item, { foreignKey: 'itemId' });

export default CharacterItem;