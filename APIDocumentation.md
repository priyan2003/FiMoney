# FIMoney Inventory Management System API

RESTful API for managing products and user authentication.

**Version:** 1.0.0  
**Base URL:** http://localhost:5000

## Authentication

This API uses Bearer Token authentication with JWT tokens for protected endpoints.

## Endpoints

### User Management

#### Register User
- **Endpoint:** `POST /api/user/register`
- **Description:** Register a new user
- **Request Body:**
  ```json
  {
    "name": "string",
    "email": "string", 
    "password": "string"
  }
  ```
- **Responses:**
  - `201` - User registered successfully
  - `400` - Bad request

#### Login User
- **Endpoint:** `POST /api/user/login`
- **Description:** Login user
- **Request Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Responses:**
  - `200` - Login successful
  - `401` - Invalid credentials

#### Logout User
- **Endpoint:** `GET /api/user/logout`
- **Description:** Logout user
- **Responses:**
  - `200` - User logged out

### Product Management

#### Add Product
- **Endpoint:** `POST /api/product/addproduct`
- **Description:** Add a new product
- **Authentication:** Required (Bearer Token)
- **Request Body:**
  ```json
  {
    "name": "string",
    "type": "string",
    "sku": "string",
    "image_url": "string",
    "description": "string",
    "quantity": 0,
    "price": 0.0
  }
  ```
- **Responses:**
  - `201` - Product added successfully
  - `400` - Invalid product data

#### Fetch Product by ID
- **Endpoint:** `GET /api/product/fetch-product/{id}`
- **Description:** Fetch a product by ID
- **Parameters:**
  - `id` (path, required) - Product ID
- **Responses:**
  - `200` - Product fetched successfully
  - `404` - Product not found

#### Update Product by ID
- **Endpoint:** `PUT /api/product/update-product/{id}`
- **Description:** Update a product by ID
- **Authentication:** Required (Bearer Token)
- **Parameters:**
  - `id` (path, required) - Product ID
- **Request Body:**
  ```json
  {
    "name": "string",
    "type": "string",
    "sku": "string",
    "image_url": "string",
    "description": "string",
    "quantity": 0,
    "price": 0.0
  }
  ```
- **Responses:**
  - `200` - Product updated successfully
  - `404` - Product not found

## Security Schemes

**Bearer Authentication**
- Type: HTTP
- Scheme: bearer
- Bearer Format: JWT