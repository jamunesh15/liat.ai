import { Router } from 'express';
import authRoutes from './auth.routes.js';
import inquiryRoutes from './inquiry.routes.js';
import contactRoutes from './contact.routes.js';
import ApiResponse from '../utils/ApiResponse.js';

const router = Router();

router.get('/health', (req, res) => {
  res.status(200).json(new ApiResponse(200, 'API healthy', { uptime: process.uptime() }));
});

router.use('/auth', authRoutes);
router.use('/inquiries', inquiryRoutes);
router.use('/contact', contactRoutes);

export default router;
