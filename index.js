import express from "express";
import authRoutes from './Routes/posts.js'
import userRoutes from './Routes/posts.js'
import postRoutes from './Routes/posts.js'

const app = express();
app.use(express.json());
app.use(cookieParser());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use(express.json());
app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);


app.listen(8800, ()=>{
    console.log('connected')
})