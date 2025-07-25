# FIMoney Inventory Management System API Documentation

## Overview

This is the RESTful API documentation for the FIMoney Inventory Management System, designed for managing products and user authentication. The API follows the OpenAPI 3.0.0 specification and is hosted at `http://localhost:5000`.

## API Endpoints

### User Management

#### Register a New User

- **Endpoint**: `POST /api/v1/user/register`
- **Summary**: Register a new user.
- **Request Body**:

  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }