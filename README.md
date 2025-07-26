# 📦 FIMoney Assignment
A full-stack backend project for managing user authentication and product inventory using RESTful APIs. Built with **Node.js**, **Express**, and **MongoDB**, it supports adding, updating, and fetching product data along with user registration and login.

---

## ✨ Features
- 🧑‍💻 User Registration & Login
- 📦 Add / Fetch / Update Product APIs
- 🧩 MongoDB Integration via Mongoose
- 🔐 JWT-Based Authentication
- 📄 Swagger (OpenAPI) Docs
- 🧪 Postman Collection for Testing
- 🛠️ Error Handling & Validation
- ✅ Complete Setup Instructions

---

## ⚙️ Tech Stack
| Layer     | Tech                        |
|-----------|-----------------------------|
| Backend   | Node.js, Express.js         |
| Database  | MongoDB with Mongoose       |
| Auth      | JWT + Cookies               |
| Docs      | README.md                   |
| Testing   | Postman                     |

---

## 🚀 Project Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/priyan2003/fimoney.git
cd backend
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Environment Configuration
Create a `.env` file in the root directory:
```env
# Server Configuration
PORT=X000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/fimoney_db
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/fimoney_db

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=7d

# Cookie Configuration
COOKIE_EXPIRES_IN=7
```

### 4️⃣ Database Setup
Make sure MongoDB is running locally or set up MongoDB Atlas:

**Local MongoDB:**
```bash
# Install MongoDB locally or use Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

**MongoDB Atlas:**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get connection string and update `MONGODB_URI` in `.env`

### 5️⃣ Start the Server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

Server will be running at `http://localhost:5000`

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000
```

### 🔐 Authentication Endpoints

#### Register User
```http
POST /api/user/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
```http
POST /api/user/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Logout User
```http
GET /api/user/logout
```

### 📦 Product Endpoints

#### Add Product
```http
POST /api/product/addproduct
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "name": "Sample Product",
  "type": "Electronics",
  "sku": "SKU001",
  "image_url": "https://example.com/image.jpg",
  "description": "This is a sample product",
  "quantity": 10,
  "price": 99.99
}
```

#### Fetch Product by ID
```http
GET /api/product/fetch-product/{product_id}
```

#### Update Product
```http
PUT /api/product/update-product/{product_id}
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "name": "Updated Product Name",
  "quantity": 15,
  "price": 89.99
}
```

---

## 📁 Project Structure
```
fimoney-backend/
├── src/
│   ├── controllers/
│   │   ├── userController.js
│   │   └── productController.js
│   ├── models/
│   │   ├── User.js
│   │   └── Product.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   └── productRoutes.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── config/
│   │   └── database.js
│   └── utils/
│       └── jwt.js
├── docs/
│   ├── swagger.yaml
│   └── postman_collection.json
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

## 🧪 Testing

### Using Postman
1. Import the Postman collection from `docs/postman_collection.json`
2. Set environment variables:
   - `base_url`: `http://localhost:5000`
   - `auth_token`: (will be set automatically after login)

### Manual Testing Examples

**1. Register a new user:**
```bash
curl -X POST http://localhost:5000/api/v1/user/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}'
```

**2. Login:**
```bash
curl -X POST http://localhost:5000/api/user/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

**3. Add a product (replace `<token>` with JWT from login):**
```bash
curl -X POST http://localhost:5000/api/product/addproduct \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{"name":"Test Product","type":"Electronics","sku":"TEST001","image_url":"https://example.com/test.jpg","quantity":5,"price":29.99}'
```

---

## 🔧 Available Scripts

```json
{
  "start": "node server.js",
  "dev": "nodemon server.js",
  "test": "jest",
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```

---

## 🐛 Troubleshooting

### Common Issues

**1. MongoDB Connection Error:**
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:** Make sure MongoDB is running locally or check your Atlas connection string.

**2. JWT Token Issues:**
```
Error: JsonWebTokenError: invalid token
```
**Solution:** Make sure you're including the Bearer token in the Authorization header.

**3. Validation Errors:**
```
Error: ValidationError: Path `email` is required
```
**Solution:** Check that all required fields are included in your request body.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@priyan2003](https://github.com/priyan2003)
- Email: priyanshukotiya4555@gmail.com

---

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/) - Fast, unopinionated web framework
- [MongoDB](https://www.mongodb.com/) - Document database
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling
- [JSON Web Tokens](https://jwt.io/) - Secure token-based authentication

---

## 📊 API Status

| Endpoint | Status | Description |
|----------|--------|-------------|
| `POST /api/v1/user/register` | ✅ | User registration |
| `POST /api/user/login` | ✅ | User authentication |
| `GET /api/user/logout` | ✅ | User logout |
| `POST /api/product/addproduct` | ✅ | Add new product |
| `GET /api/product/fetch-product/{id}` | ✅ | Fetch product by ID |
| `PUT /api/product/update-product/{id}` | ✅ | Update product |

---

## 🔮 Future Enhancements

- [ ] Delete Product API
- [ ] Product Search & Filtering
- [ ] User Roles & Permissions
- [ ] Product Categories Management
- [ ] Inventory Alerts
- [ ] API Rate Limiting
- [ ] Unit & Integration Tests
- [ ] Docker Containerization
- [ ] CI/CD Pipeline
