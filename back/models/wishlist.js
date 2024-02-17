const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');
const Wish = sequelize.define('Wish', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      

},{tableName:'wishlist',timestamps:false})

module.exports=Wish