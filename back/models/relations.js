const User = require('./users.js')
const Cart =require('./cart.js')
const Beat =require('./beats.js')

User.hasMany(Cart, { foreignKey: 'user_id' });
Cart.belongsTo(User, { foreignKey: 'user_id' });
module.exports={
    User,Cart,Beat
}
