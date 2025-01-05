import Product from "../models/product.js";

export function addProduct(req, res) {

    console.log(req.user);

    // Check if the user is authenticated
    if (!req.user) {
        return res.status(401).send({ message: "Unauthorized" });
    }
    
    // Check if the user has the correct role
    if (req.user.role !== "admin") {
        return res.status(403).send({ message: "Forbidden" });
    }
    
    // If authenticated and authorized, proceed to handle the request
    const data = req.body;
    const product = new Product(data);
    
    product.save()
        .then(() => {
            res.status(201).send({ message: "Product added successfully" });
        })
        .catch((error) => {
            res.status(400).send({ message: error.message });
        });
}