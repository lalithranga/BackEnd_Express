import express from 'express';
import {addProduct, getAllProducts, deleteProduct, updateProduct } from '../controllers/productController.js';
import { get } from 'mongoose';

const productRouter = express.Router();
productRouter.post('/',addProduct)
productRouter.get('/',getAllProducts)
productRouter.delete('/:key',deleteProduct)
productRouter.put('/:key',updateProduct)

export default productRouter;