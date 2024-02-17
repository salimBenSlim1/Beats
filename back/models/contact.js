const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');
const Contact = sequelize.define('Contact', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    name:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    email:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false
    }
},{tableName:'contact',timestamps:false})

module.exports=Contact