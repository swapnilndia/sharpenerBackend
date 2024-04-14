import { Router } from "express";
import { validateExpense } from "../middleware/validationMiddleware.js";
import { create_Expense, delete_Specific_Expense, get_All_Expense, get_Specific_Expense, update_Specific_Expense } from "../controller/expense.controller.js";

const router = Router()

router.post('/', validateExpense, create_Expense)
router.get('/', get_All_Expense)
router.get('/:id',  get_Specific_Expense)
router.delete('/:id',  delete_Specific_Expense)
router.put('/:id',  update_Specific_Expense)

export default router