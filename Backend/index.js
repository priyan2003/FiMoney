import express from 'express'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import cors from 'cors';
import connectDB from './utils/db.js';
import UserRoute from './Routes/user.route.js'
import ProductRoute from './Routes/product.route.js'
import path from "path"
dotenv.config();
const app = express();


app.get('/home',(req, res)=>{
    return res.status(200).json({
        mess: "Hi i am home",
        sucess: true
    })
})
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
  origin: 'https://fimoney-priyanshu-i1fl.onrender.com', // ✅ No trailing slash
  credentials: true
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

app.use('/api/user',UserRoute)// api for user register is http://localhost:5000/api/user
app.use('/api/product',ProductRoute) // api to add product is http://localhost:5000/api/product



app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
}) 
