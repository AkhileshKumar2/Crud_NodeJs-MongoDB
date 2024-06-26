const express = require("express");
const mongoose = require("mongoose");
//const Product = require('./models/product.model')
const productRoute = require("./routes/product.route.js");
const app = express();


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));





// routes
app.use("/api/products", productRoute);

// app.get('/', (req, res) => {
//     res.send("Hello from Node API");
// })




// app.post('/api/products', async (req, res) => {
//     try {
//         const product = await Product.create((req.body));
//         res.status(200).json(product)

//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });


//Update Product 
// app.put('/api/product/:id', async (req, res) => {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//         return res.status(404).json({ message: "Product not found" });
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
// })


//delete product
// app.delete('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if (!product) {
//             return res.status(404).json({ message: "akhielsh, Product not found " })
//         }

//         res.status(200).json({ message: "Hey Product deleted Successfully" })
//     } catch (error) {
//         res.status(500).json({ message: error.message });

//     }
// })

mongoose
    .connect("mongodb+srv://akhilesh9305g:t4qR2EimIjhPurnr@backedndb.js2xk5j.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackednDB")
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });


    })
    .catch(() => {
        console.log("Connection failed!");
    });