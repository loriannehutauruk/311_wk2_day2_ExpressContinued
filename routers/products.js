const express = require('express')
const router = express.Router()
const ProductsController = require('../controllers/products')

router.get('/products', ProductsController.list)
//not written yet but this will show one product
// router.get('/products/:id', Products.ProductsController.show)
//not written yet but this will create a product
// router.post('/products/', Products.ProductsController.create)

module.exports = router