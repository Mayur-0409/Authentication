export const generatVerificationCode = (req, res) => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};
