import express from "express";
import authRoutes from './Routes/posts.js'
import userRoutes from './Routes/posts.js'
import postRoutes from './Routes/posts.js'

const app = express();

app.use(express.json());
app.use('/api/posts', postRoutes);
app.use('/api/posts', authRoutes);
app.use('/api/posts', userRoutes);


app.listen(8800, ()=>{
    console.log('connected')
})