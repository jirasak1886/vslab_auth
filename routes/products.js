const express = require('express');
const router = express.Router();
const authenticateToken = require("../middleware/auth");
const { getProduct,getProductID,postProduct,updateProduct,deleteProduct } =require("../controller/productController");

router.get('/',authenticateToken,getProduct); // Get all products
router.get('/id',authenticateToken,getProductID ); // Get a product by ID
router.post('/',authenticateToken, postProduct); // Create a new product
router.put('/id',authenticateToken, updateProduct); // Update a product by ID
router.delete('/id',authenticateToken, deleteProduct);

module.exports = router;