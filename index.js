import express from 'express';
import cors from 'cors';
import userRoutes from './routes/UserRoute.js';
import dotenv from "dotenv";
dotenv.config();




const app = express();

app.use(express.json());
app.use(cors());

app.use('/api',userRoutes);

app.listen(3000,() => {
     console.log("listening on port 3000");
})