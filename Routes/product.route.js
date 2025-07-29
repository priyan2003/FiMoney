import express from 'express';
import { addProduct, getProductById, updateProduct } from '../Controllers/product.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
const router = express.Router();

router.route('/addproduct').post(addProduct);
router.route('/fetch-product/:id').get(getProductById);
router.route('/update-product/:id').put(updateProduct);
export default router