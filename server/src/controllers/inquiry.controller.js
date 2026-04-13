import Inquiry from '../models/Inquiry.model.js';
import ApiResponse from '../utils/ApiResponse.js';

const createInquiry = async (req, res, next, type) => {
  try {
    const payload = {
      ...req.body,
      interestType: type,
    };

    const inquiry = await Inquiry.create(payload);

    res.status(201).json(new ApiResponse(201, 'Inquiry submitted successfully', inquiry));
  } catch (error) {
    next(error);
  }
};

export const submitLeasingInquiry = async (req, res, next) => createInquiry(req, res, next, 'leasing');

export const submitSponsorshipInquiry = async (req, res, next) =>
  createInquiry(req, res, next, 'sponsorship');

export const submitEventInquiry = async (req, res, next) => createInquiry(req, res, next, 'event');

export const getAllInquiries = async (req, res, next) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json(new ApiResponse(200, 'Inquiries fetched', inquiries));
  } catch (error) {
    next(error);
  }
};
