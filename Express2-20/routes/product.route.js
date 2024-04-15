import { Router } from "express";
import { validateProduct } from "../middleware/validationMiddleware.js";
import { create_Product, delete_Specific_Product, get_All_Product, get_Specific_Product, update_Specific_Product } from "../controller/product.controller.js";

const router = Router()

router.post('/', validateProduct, create_Product)
router.get('/', get_All_Product)
router.get('/:id',  get_Specific_Product)
router.delete('/:id',  delete_Specific_Product)
router.put('/:id',  update_Specific_Product)

export default router