import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import route from './router';
import mongoose from 'mongoose';

dotenv.config();
const port = process.env.PORT || 8000

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(
  cors({
    origin: '*',
  }),
);

app.get('/', (req, res) => {
  res.status(200).json({
    code: 200,
    status: 'Success',
    message: 'Welcome to Note-taker',
  });
});

app.use(route);

// ERROR HANDLING
app.use((req, res) => {
  res.status(404).json({
    status: 'Not Found',
  });
});

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(()=>{
    app.listen(port, () => {
      console.log(`Starting on port ${port}`);
    });
  })
  .catch((err)=>{
    console.log(err);
  })

export default app;
