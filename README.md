# Ecommerce Catalog API

## Overview
This project is a Node.js and MongoDB based REST API for managing an E-commerce product catalog. It demonstrates advanced database modeling concepts such as nested schemas, aggregation queries, indexing, and stock management using Mongoose.

The application was developed as part of a database experiment to understand real-world data modeling and backend API development.

---

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman (API testing)
- GitHub (version control)

---

## Features
- Nested schema design for product variants
- Customer review management
- Average category rating calculation using MongoDB aggregation
- Stock management for product variants
- Indexed database queries for better performance
- RESTful API endpoints

---

## Project Structure
```
ecommerce-catalog
│
├── models
│   └── Product.js
│
├── routes
│   └── productRoutes.js
│
├── server.js
├── package.json
├── .env
└── .gitignore
```

---

## API Endpoints

### Add Product
```
POST /products/add
```

### Get Category Rating (Aggregation)
```
GET /products/ratings
```

---

## Sample Product Data
```json
{
"name": "Premium Headphones",
"category": "Electronics",
"variants": [
{
"sku": "HP-BL-001",
"color": "Black",
"price": 199.99,
"stock": 15
},
{
"sku": "HP-WH-001",
"color": "White",
"price": 209.99,
"stock": 8
}
],
"reviews": [
{
"userId": "65f4a8b7c1e6a8c1f4b8c7d1",
"rating": 5,
"comment": "Excellent sound quality"
}
],
"avgRating": 5
}
```

---

## Author
Shaman Sharma  
B.Tech CSE (AML)  
Chandigarh University
