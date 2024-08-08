import express from "express";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  productPdfController,
  realtedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
import { generatePDF } from '../controllers/generatePdf.js'; // Correct import

const router = express.Router();

// Product routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);
router.get("/get-product", getProductController);
router.get("/get-product/:slug", getSingleProductController);
router.get("/product-photo/:pid", productPhotoController);
router.get("/product-pdf/:pid", productPdfController); // Ensure this route is correct
router.delete("/delete-product/:pid", deleteProductController);
router.post("/product-filters", productFiltersController);
router.get("/product-count", productCountController);
router.get("/product-list/:page", productListController);
router.get("/search/:keyword", searchProductController);
router.get("/related-product/:pid/:cid", realtedProductController);
router.get("/product-category/:slug", productCategoryController);

// New route for generating PDF
router.get("/generate-pdf/:orderId", async (req, res) => {
  const { orderId } = req.params;
  try {
    await generatePDF(orderId);
    res.status(200).send("PDF generated successfully");
  } catch (error) {
    res.status(500).send("Error generating PDF");
  }
});

// Payment routes
router.get("/braintree/token", braintreeTokenController);
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
