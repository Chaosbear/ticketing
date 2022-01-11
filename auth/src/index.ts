import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  //check env variable from k8s
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be identified');
  }

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be identified');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log(err);
  }
  app.listen(3000, () => {
    console.log('Listening on Port 3000');
  });
};

start();
