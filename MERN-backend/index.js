import express from 'express';
import cors from 'cors';
import router from './routes.js';
import connectDB from './db.js';
const app = express();

// middlewares
app.use(express.json())
app.use(cors())

app.use("/api", router)


connectDB();

const PORT = 8000;
app.listen(PORT, () => {
    console.log("HEYA!! Server up and running at ", PORT)
})