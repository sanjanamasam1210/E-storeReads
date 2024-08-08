import mongoose from 'mongoose';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import Order from '../models/orderModel.js'; // Adjust the path as necessary
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB using the MONGO_URL from the .env file
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

export const generatePDF = async (orderId) => {
  try {
    // Fetch the order data
    const order = await Order.findById(orderId).populate("products").populate("buyer").exec();

    if (!order) {
      console.log("Order not found");
      return;
    }

    // Create a new PDF document
    const doc = new PDFDocument();
    const filePath = `./order_${orderId}.pdf`;
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    // Add order details to the PDF
    doc.fontSize(20).text(`Order ID: ${orderId}`, { underline: true });
    doc.moveDown();
    doc.fontSize(16).text(`Buyer: ${order.buyer.name}`);
    doc.text(`Status: ${order.status}`);
    doc.text(`Payment: ${order.payment.success ? "Success" : "Failed"}`);
    doc.text(`Order Date: ${order.createdAt}`);
    doc.moveDown();
    doc.fontSize(18).text('Products:', { underline: true });
    order.products.forEach((product, index) => {
      doc.fontSize(14).text(`${index + 1}. ${product.name} - ${product.description} - $${product.price}`);
    });
    doc.end();

    stream.on('finish', () => {
      console.log(`PDF generated successfully at ${filePath}`);
    });

  } catch (error) {
    console.error("Error generating PDF:", error);
  }
};