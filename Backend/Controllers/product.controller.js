import { Product } from '../models/product.model.js'; // adjust path if needed

export const addProduct = async (req, res) => {
  try {
    const { name, type, sku, image_url, description, quantity, price } = req.body;

    // Validation: Ensure all required fields are present
    if (!name || !type || !sku || !image_url || quantity == null || price == null) {
      return res.status(400).json({
        mess: "All fields except description are required",
        success: false,
      });
    }

    // Check if SKU already exists
    const existingProduct = await Product.findOne({ sku });
    if (existingProduct) {
      return res.status(400).json({
        mess: "Product with this SKU already exists",
        success: false,
      });
    }

    // Create new product
    const product = await Product.create({
      name,
      type,
      sku,
      image_url,
      description,
      quantity,
      price,
    });

    return res.status(201).json({
      mess: "Product added successfully",
      success: true,
      product,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      mess: "Internal Server Error",
      success: false,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params; // get SKU from route param
    const { name, type, image_url, description, quantity, price } = req.body;

    // Check if product with given SKU exists
    const product = await Product.findById(id)
    if (!product) {
      return res.status(404).json({
        mess: "Product not found with given SKU",
        success: false,
      });
    }

    // Update only the fields provided in request body
    if (name !== undefined) product.name = name;
    if (type !== undefined) product.type = type;
    if (image_url !== undefined) product.image_url = image_url;
    if (description !== undefined) product.description = description;
    if (quantity !== undefined) product.quantity = quantity;
    if (price !== undefined) product.price = price;

    await product.save();

    return res.status(200).json({
      mess: "Product updated successfully",
      success: true,
      product,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      mess: "Internal Server Error",
      success: false,
    });
  }
};


export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Find product by ID
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        mess: 'Product not found',
        success: false,
      });
    }

    return res.status(200).json({
      mess: 'Product fetched successfully',
      success: true,
      product,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      mess: 'Internal Server Error',
      success: false,
    });
  }
};

