const User = require('../models/User');
const { getHashedPassword, comparePasswords } = require('../utils')

const findAllUsers = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    throw new Error('Unable to fetch users');
  }
};

const findUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error('Error retrieving user');
  }
};

const createUser = async (input) => {
  try {
    const { password, ...rest } = input;
    const hashedPassword = await getHashedPassword(password);
    const newUser = await User.create({ password: hashedPassword, ...rest });
    return newUser
  } catch (error) {
    console.log(error)
    throw new Error('Unable to create new user');
  }
}

const getUserByEmailAndPassword = async (input) => {
  try {
    const { email, password } = input
    const user = await User.findOne({ where: { email } })

    if (user) {
      const passwordMatch = await comparePasswords(password, user.toJSON().password)
        if (passwordMatch) {
          return user
        }

        throw new Error('Invalid credentials')
    }

    throw new Error('Invalid credentials')

  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  getUserByEmailAndPassword
};