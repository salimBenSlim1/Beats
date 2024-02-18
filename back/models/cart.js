const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');
const Cart = sequelize.define('Cart', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  },{tableName:'cart',timestamps:false});
module.exports=Cart