import Product from "../models/product.model.js";

export const create_Product = async (req, res) => {
    try {
        const { title,price,imageUrl,description } = req.body
        const createProduct = await req.user.createProduct({ title,price,imageUrl,description, UserId : req.user.id})
        if (!createProduct) {
            res.status(500).json({ msg: 'Something went wrong' })
        }
        res.status(201).json({ msg: 'Product created succesfully', createProduct })
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong' })
    }
}
export const get_All_Product = async (req, res) => {
    try {
        const ProductList = await req.user.getProducts()
        if (!ProductList) {
            res.status(404).json({ msg: 'Product list not found' })
        }
        res.status(200).json({ msg: 'Product List fetched successfully', ProductList })
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong' })
    }
}
export const get_Specific_Product = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        const product = await Product.findByPk(id)
        console.log(product)
        if (!product) {
            res.status(404).json({ msg: 'Product Not Found' })
        }
        res.status(200).json({ msg: 'Product fetched successfully', product })
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong 2' })
    }
}
export const delete_Specific_Product = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        const deletedProduct = await Product.destroy({ where: { id } })
        console.log(deletedProduct)
        if (!deletedProduct) {
            res.status(404).json({ msg: 'Product Not Found' })
        }
        res.status(200).json({ msg: 'Product deleted successfully', deletedProduct })
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong 2' })
    }
}
export const update_Specific_Product = async (req, res) => {
    try {
        const { id } = req.params;
        const productObj = req.body;

        const [rowsAffected] = await Product.update(productObj, { where: { id } });

        if (rowsAffected === 0) {
            return res.status(404).json({ msg: 'Product Not Found' });
        }

        const updatedProduct = await Product.findOne({ where: { id } });

        return res.status(200).json({ msg: 'Product updated successfully', updatedProduct });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Something went wrong' });
    }
};
