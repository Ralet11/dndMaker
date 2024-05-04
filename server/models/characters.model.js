import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import User from './user.model.js';
import Race from './race.model.js';
import Class from './class.mode..js';


const Character = sequelize.define('Character', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    str: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    dex: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    con: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    int: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    wis: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    cha: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    armorClass: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    speed: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    hitPoints: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    competencia: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: User,
            key: 'id'
        }
    },
    raceId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Race,
            key: 'id'
        }
    },
    classId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Class,
            key: 'id'
        }
    },
    alignment: {
        type: DataTypes.STRING,
        allowNull: true
    },
    personalityTrait1: {
        type: DataTypes.STRING,
        allowNull: true
    },
    personalityTrait2: {
        type: DataTypes.STRING,
        allowNull: true
    },
    personalityTrait3: {
        type: DataTypes.STRING,
        allowNull: true
    },
    backstory: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true
  }
});

Character.belongsTo(User, { foreignKey: 'userId' });
Character.belongsTo(Race, { foreignKey: 'raceId' });
Character.belongsTo(Class, { foreignKey: 'classId' });

export default Character;