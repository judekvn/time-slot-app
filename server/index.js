
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

import timeSlotsRoutes from './routes/timeSlots.js';

const app = express();

app.use(cors());

app.use('/api/timeSlots', timeSlotsRoutes);

const CONNECTION_URL = 'mongodb+srv://timeslot-app:timeslot-app@cluster0.0pknp.mongodb.net/timeslot?retryWrites=true&w=majority';
const PORT = process.env.BACKEND_PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);