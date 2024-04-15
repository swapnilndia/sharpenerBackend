import { Router } from "express";
import { get_Cart, post_Cart, post_Cart_Delete_Product } from "../controller/shop.controller.js";

const router = Router()

router.get('/', get_Cart )
router.post('/', post_Cart )
router.delete('/', post_Cart_Delete_Product)


export default router;