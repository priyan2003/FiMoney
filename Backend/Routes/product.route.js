import express from 'express';
import { addProduct, updateProduct } from '../Controllers/product.controller.js';
const router = express.Router();

router.route('/addproduct').post(addProduct);
router.route('/update-product/:id').put(updateProduct);
export default router