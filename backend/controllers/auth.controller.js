export const signup = async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body;
  } catch (error) {}
};
export const login = async (req, res) => {
  res.json({
    data: "You hit the login endpoint",
  });
};
export const logout = async (req, res) => {
  res.json({
    data: "You hit the logout endpoint",
  });
};
