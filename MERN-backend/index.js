import express from 'express';
import cors from 'cors';
import router from './routes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const { DB_USERNAME, DB_PASSWORD } = process.env;
const password = encodeURIComponent(DB_PASSWORD);
// String literal
const MONGO_URI = `mongodb+srv://${DB_USERNAME}:${password}@mern-mmamc.iobwd2h.mongodb.net/`;
// const MONGO_URI = "mongodb+srv://Shailesh123:herohero@shaileshcluster.btqskgt.mongodb.net/";


// IIFE
(async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("DB Connected Successfully")
    } catch (err) {
        console.log("DB Connection Error", err)
    }
})();

const app = express();

// middlewares
app.use(express.json())
app.use(cors())

app.use("/api", router)



const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT)
})