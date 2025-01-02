import Product from "../models/product.js";

export function addProduct(req, res) {
    const data = req.body;
    const product = new Product(data);
    product.save().then(() => {
        res.status(201).send({ message: "Product added successfully" });
    }).catch((error) => {
        res.status(400).send({ message: error.message });
    });
}
