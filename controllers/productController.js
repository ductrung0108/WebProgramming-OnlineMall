const Product = require("../models/product");
const asyncHandler = require("express-async-handler");

//Display all Products on GET
exports.product_list = asyncHandler(async (req, res, next) => {
  const products = await Product.find({});
  res.render("product_list", { products });
});

//READ featured Products on GET
exports.product_featured = asyncHandler(async (req, res, next) => {
  // res.send("NOT IMPLEMENTED: Featured products");
  console.log('Featured products');
  next();
});

//READ new Products on GET
exports.product_new = asyncHandler(async (req, res, next) => {
  // res.send("NOT IMPLEMENTED: New products");
  console.log('New products');
  next();
});

/**Featured and new Products, depending on the request head, will display it mall-wise or store-wise */

//READ Product detail on GET
exports.product_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Product detail: ${req.params.id}`);
});

//READ Product create-form on GET
exports.product_create_get= asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Create product form");
});

//CREATE Product on POST
exports.product_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Create product");
});

//READ Product update-form on GET
exports.product_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Update product form");
});

//UPDATE Product on POST
exports.product_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Update product");
});

//DELETE Product on POST
exports.product_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Delete product");
});

