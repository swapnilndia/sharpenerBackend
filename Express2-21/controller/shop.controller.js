import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";
import CartItem from "../models/cart-item.model.js";

export const get_Cart = async (req, res) => {
    const cart = await req.user.getCart()
    const products = await cart.getProducts();
    console.log(products)
    res.status(200).json({ cart, products })

}

export const post_Cart_Delete_Product = async (req, res) => {
    const prodId = req.body.productId;
    const cart = await req.user.getCart()
    const products = await cart.getProducts({ where: { id: prodId } })
    const product = products[0]
    const deleteProduct = await product.cartItem.destroy()
    res.status(200).json({deleteProduct})

}

export const post_Cart = async (req, res) => {
    let product;
    const prodId = req.body.productId;
    let newQuantity = 1
    const cart = await req.user.getCart()
    const products = await cart.getProducts({ where: { id: prodId } })
    if (products.length > 0) {
        product = products[0]
    }

    if (product) {
        console.log(product)
        const oldQuantity = await product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        const newCart = await cart.addProduct(product, {
            through: {
                quantity: newQuantity
            }
        })
        res.status(200).json({ cart })

    } else {
        const existingProduct = await Product.findByPk(prodId)
        const newCart = await cart.addProduct(existingProduct, {
            through: {
                quantity: newQuantity
            }
        })
        res.status(200).json({ cart })
    }


}