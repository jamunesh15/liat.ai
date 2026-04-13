import ApiError from '../utils/ApiError.js';

export const validateRequiredFields = (fields = []) => {
  return (req, res, next) => {
    const missing = fields.filter((field) => !req.body[field]);

    if (missing.length > 0) {
      return next(new ApiError(400, `Missing required fields: ${missing.join(', ')}`));
    }

    return next();
  };
};
