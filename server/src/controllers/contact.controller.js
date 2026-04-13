import Contact from '../models/Contact.model.js';
import ApiResponse from '../utils/ApiResponse.js';

export const submitContact = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(new ApiResponse(201, 'Contact request submitted', contact));
  } catch (error) {
    next(error);
  }
};
