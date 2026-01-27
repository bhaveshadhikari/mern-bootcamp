import express from 'express';
import cors from 'cors';
import router from './routes.js';
import mongoose from 'mongoose';

const DB_PASSWORD = ""
const DB_USERNAME = '';
// const password = encodeURIComponent(DB_PASSWORD);

// String literal
// const MONGO_URI = `mongodb+srv://${DB_USERNAME}:${password}@mern-mmamc.iobwd2h.mongodb.net/`;
const MONGO_URI = "";

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