import { Router } from 'express';
import {
  getAllInquiries,
  submitEventInquiry,
  submitLeasingInquiry,
  submitSponsorshipInquiry,
} from '../controllers/inquiry.controller.js';
import { validateRequiredFields } from '../middleware/validate.middleware.js';

const router = Router();
const required = ['name', 'email', 'company', 'message'];

router.post('/leasing', validateRequiredFields(required), submitLeasingInquiry);
router.post('/sponsorship', validateRequiredFields(required), submitSponsorshipInquiry);
router.post('/event', validateRequiredFields(required), submitEventInquiry);
router.get('/', getAllInquiries);

export default router;
