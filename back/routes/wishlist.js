const wishRouter=require('express').Router()
const wishController=require('../controllers/wishlist')
wishRouter.post('/add',wishController.addToWishlist)
wishRouter.get('/get/:id',wishController.getWishlistOfUser)
module.exports=wishRouter