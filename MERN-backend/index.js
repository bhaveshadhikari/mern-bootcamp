import express from 'express';
import cors from 'cors';
import router from './routes.js';
const app = express();

// middlewares
app.use(express.json())
app.use(cors())

app.use("/api", router)



const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT)
})