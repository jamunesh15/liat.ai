import ApiResponse from '../utils/ApiResponse.js';

export const errorMiddleware = (err, req, res, next) => {
  if (err.message === 'CORS origin not allowed') {
    return res.status(403).json(new ApiResponse(403, err.message));
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';

  res.status(statusCode).json(new ApiResponse(statusCode, message));
};
