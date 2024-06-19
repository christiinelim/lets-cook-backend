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
    throw new Error(error.message);
  }
};

const createUser = async (input) => {
  try {
    const { password, ...rest } = input;
    const user = await User.findOne({ where: { email: rest.email } })

    if (user) {
      throw new Error('Email already in use')
    }

    const hashedPassword = await getHashedPassword(password);
    const newUser = await User.create({ password: hashedPassword, ...rest });
    return newUser
  } catch (error) {
    throw new Error(error.message);
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

const updateUser = async (input) => {
  try {
    const { password, email } = input;
    const user = await User.findOne({ where: { email } })
    if (!user) {
      throw new Error('User not found');
    }

    const hashedPassword = await getHashedPassword(password);
    user.password = hashedPassword;
    await user.save();
    return user
  } catch (error) {
    throw new Error(error.message);
  }
}

const deleteUser = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    await user.destroy();
    return user
  } catch (error) {
    throw new Error('Unable to delete user');
  }
}

const verifyUser = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    user.verified = "Yes";
    await user.save();
    return user
  } catch (error) {
    throw new Error('Unable to verify user');
  }
}

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  getUserByEmailAndPassword,
  updateUser,
  deleteUser,
  verifyUser
};