import { Router } from 'express';
import { submitContact } from '../controllers/contact.controller.js';
import { validateRequiredFields } from '../middleware/validate.middleware.js';

const router = Router();

router.post(
  '/',
  validateRequiredFields(['name', 'email', 'company', 'interestType', 'message']),
  submitContact
);

export default router;
