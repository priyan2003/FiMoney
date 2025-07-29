import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './utils/db.js';
import UserRoute from './Routes/user.route.js';
import ProductRoute from './Routes/product.route.js';
import path from "path";

dotenv.config();
const app = express();

//  Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:5173', // 
  credentials: true
};
app.use(cors(corsOptions));


app.get('/home', (req, res) => {
  return res.status(200).json({
    mess: "Hi i am home",
    success: true
  });
});

app.use('/api/user', UserRoute);
app.use('/api/product', ProductRoute);

const PORT = process.env.PORT || 5000;


connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1); // Stop app if DB fails
  });
