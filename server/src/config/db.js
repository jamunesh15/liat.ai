import mongoose from 'mongoose';

let connectionPromise;

export const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error('MONGO_URI is not configured');
  }

  // Reuse existing connection in serverless and local hot-reload contexts.
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (connectionPromise) {
    return connectionPromise;
  }

  connectionPromise = mongoose.connect(mongoUri).then((conn) => {
    console.log('MongoDB connected');
    return conn;
  });

  try {
    return await connectionPromise;
  } catch (error) {
    connectionPromise = undefined;
    throw error;
  }
};
