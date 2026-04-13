import cors from 'cors';
import express from 'express';
import rootRouter from './routes/index.js';
import { errorMiddleware } from './middleware/error.middleware.js';
import { connectDB } from './config/db.js';

const app = express();

const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:5173',
  'http://127.0.0.1:5173',
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error('CORS origin not allowed'));
    },
    credentials: true,
  })
);
app.options(/.*/, cors());
app.use(express.json());

app.use(async (_req, _res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    next(error);
  }
});

app.get('/api/health', (_req, res) => {
  res.status(200).json({ success: true, message: 'API healthy' });
});

app.use('/api', rootRouter);
app.use(errorMiddleware);

export default app;
