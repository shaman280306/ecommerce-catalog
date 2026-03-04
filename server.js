require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/products", productRoutes);

app.get("/", (req,res)=>{
    res.send("Ecommerce Catalog API Running");
})

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server running");
});