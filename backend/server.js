import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js'
const app = express();
app.use(cors())

dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI;

try {
    mongoose.connect(URI)
    .then(console.log("connected to mongodb"))
} catch (err) {
    console.error("Mongodb connection ", err)
}

app.use('/user', userRoute)

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
