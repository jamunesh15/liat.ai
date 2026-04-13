import ApiResponse from '../utils/ApiResponse.js';

export const login = async (req, res) => {
  const { email } = req.body;
  const fakeToken = `token-for-${email || 'user'}`;

  res.status(200).json(
    new ApiResponse(200, 'Logged in', {
      token: fakeToken,
      user: { email },
    })
  );
};
