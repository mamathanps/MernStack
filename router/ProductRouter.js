const express = require("express");
const router = express.Router();
const Product = require("../model/Product");

//Product Root Router
//API: localhost:8000/product

/*
localhost:8000/product (Product Root API) - POST Method/Routes
localhost:8000/product/upload (Upload API) - POST Method/Routes
localhost:8000/product/mobiles (Mobiles API) - GET Method/Routes
localhost:8000/product/laptops (Laptops API) - GET Method/Routes
localhost:8000/product/watches (Watches API) - GET Method/Routes
*/

router.get('/', (req, res) => {
    res.send("Product API------!!");
});

/*
API: http://localhost:8000/product/upload
Method: POST
Fields: Name, Brand, Image, Price, Quantity, Category, Description(desc), Usage, Created.
Type: Private Request.
*/

router.post("/upload", async (req, res) => {
    try {
        // Receive Product Data from React Form that's way it is POST Method(Post request).
        // let { name, brand, image, price, qty, category, desc, usage, created } = req.body; (this is destructuring format we already use it)
        let newProduct = {
            name: req.body.name,
            brand: req.body.brand,
            image: req.body.image,
            price: req.body.price,
            qty: req.body.qty,
            category: req.body.category,
            desc: req.body.desc,
            usage: req.body.usage,
            //created: req.body.created
        };
        // after receving the data from react form we need to save the data by using following bellow code.
        //let product = new Product({ name, brand, image, price, qty, catagory, desc, usage });
        let product = new Product(newProduct);
        console.log("Product details are running successfully!!");   
        
        product = await product.save(); //this code indicates it will save the database.
        res.status(200).json({
            result: "Success",
            product: product,
        });
    } catch (err) {
        res.status(500).json({ errors: [{ msz: "Server Error" }] });
    }
});

/*
API: localhost:8000/product/Mobiles
method: GET
Type: Private
*/
router.get("/Mobiles", async (req, res) => {
    try {
        let product = await Product.find({ category: "Mobiles" })
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ errors: [{ msz: "Server Error" }] });
    }
});

/*
API: localhost:8000/product/Laptops
method: GET
Type: Private
*/
router.get("/Laptops", async (req, res) => {
    try {
        let product = await Product.find({ category: "Laptops" })
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ errors: [{ msz: "Server Error" }] });
    }
});

/*
API: localhost:8000/product/Watches
method: GET
Type: Private
*/
router.get("/Watches", async (req, res) => {
    try {
        let product = await Product.find({ category: "Watches" })
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ errors: [{ msz: "Server Error" }] });
    }
});


module.exports = router;