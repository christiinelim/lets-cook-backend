const Token = require('../models/Token');

const createToken = async (userId, token) => {
  try {
    const tokenData = {
      user_id: userId,
      type: "Verification",
      token
    }
    await Token.create(tokenData);
  } catch (error) {
    throw new Error('Unable to create new token');
  }
}

const verifyToken = async (input) => {
  try {
    const { id, type, token } = input
    const userToken = await Token.findOne({ where: { user_id: id, type, token } });
    if (userToken) {
      if (userToken.toJSON().expires_at >= new Date()) {
        await userToken.destroy();
        return true
      } 
      throw new Error("Token has expired")
    }
    throw new Error("Invalid token")
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = {
  createToken,
  verifyToken
};