export const registerUser = (req, res) => {
  console.log(req.body);
  res.status(201).json({ message: 'User registered successfully!' });
};
