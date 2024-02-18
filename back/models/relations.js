const User = require('./users.js')
const Cart =require('./cart.js')
const Beat =require('./beats.js')
const Wish = require('./wishlist.js')
const Contact =require('./contact.js')
User.hasMany(Cart, { foreignKey: 'user_id' });
Cart.belongsTo(User, { foreignKey: 'user_id' });

Beat.hasMany(Cart,{foreignKey:'beat_id'})
Cart.belongsTo(Beat,{foreignKey:'beat_id'})

User.hasMany(Beat,{foreignKey:'user_id'})
Beat.belongsTo(User,{foreignKey:'user_id'})

User.hasMany(Contact,{foreignKey:'user_id'})
Contact.belongsTo(User,{foreignKey:'user_id'})

User.hasMany(Wish,{foreignKey:'user_id'})
Wish.belongsTo(User,{foreignKey:'user_id'})

Beat.hasMany(Wish,{foreignKey:'beat_id'})
Wish.belongsTo(Beat,{foreignKey:'beat_id'})
module.exports={
    User,Cart,Beat,Wish,Contact
}
