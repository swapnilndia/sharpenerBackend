import Expense from "../models/expense.model.js";

export const create_Expense = async (req, res) => {
    try {
        const ExpenseObj = req.body
        const createExpense = await Expense.create(ExpenseObj)
        if (!createExpense) {
            res.status(500).json({ msg: 'Something went wrong' })
        }
        res.status(201).json({ msg: 'Expense created succesfully', createExpense })
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong' })
    }
}
export const get_All_Expense = async (req, res) => {
    try {
        const ExpenseList = await Expense.findAll()
        if (!ExpenseList) {
            res.status(404).json({ msg: 'Expense list not found' })
        }
        res.status(200).json({ msg: 'Expense List fetched successfully', ExpenseList })
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong' })
    }
}
export const get_Specific_Expense = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        const expense = await Expense.findByPk(id)
        console.log(expense)
        if (!expense) {
            res.status(404).json({ msg: 'Expense Not Found' })
        }
        res.status(200).json({ msg: 'Expense fetched successfully', expense })
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong 2' })
    }
}
export const delete_Specific_Expense = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        const deletedExpense = await Expense.destroy({ where: { id } })
        console.log(deletedExpense)
        if (!deletedExpense) {
            res.status(404).json({ msg: 'Expense Not Found' })
        }
        res.status(200).json({ msg: 'Expense deleted successfully', deletedExpense })
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong 2' })
    }
}
export const update_Specific_Expense = async (req, res) => {
    try {
        const { id } = req.params;
        const ExpenseObj = req.body;

        const [rowsAffected] = await Expense.update(ExpenseObj, { where: { id } });

        if (rowsAffected === 0) {
            return res.status(404).json({ msg: 'Expense Not Found' });
        }

        const updatedExpense = await Expense.findOne({ where: { id } });

        return res.status(200).json({ msg: 'Expense updated successfully', updatedExpense });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Something went wrong' });
    }
};
