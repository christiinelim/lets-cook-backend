const User = require('../models/User');
const Follow = require('../models/Follow');

const { getHashedPassword, comparePasswords } = require('../utils');

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

    if (user && await comparePasswords(password, user.toJSON().password)) {
      return user;
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

    user.password = await getHashedPassword(password);
    await user.save();
    return user
  } catch (error) {
    throw new Error(error.message);
  }
}

const deleteUser = async (userId) => {
  try {
    const user = await User.findByPk(userId);

    if (!user) {
      throw new Error('User not found');
    }

    await user.destroy();
    return user
  } catch (error) {
    throw new Error('Unable to delete user');
  }
}

const verifyUser = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    
    if (!user) {
      throw new Error('User not found');
    }

    user.verified = "Yes";
    await user.save();
    return user
  } catch (error) {
    throw new Error('Unable to verify user');
  }
}

const followUser = async (input) => {
  try {
    const { follower, following } = input;
    if (follower === following) {
      throw new Error('Unable to follow own account');
    }
    
    const foundFollowing = await Follow.findOne({ where: { follower, following }});
    if (foundFollowing) {
      throw new Error('Unable to follow as already following currently');
    }

    await Follow.create({ follower, following });
    return findUserById(following);
  } catch (error) {
    throw new Error(error.message);
  }
}

const unfollowUser = async (input) => {
  try {
    const { follower, following } = input;
    const foundFollowing = await Follow.findOne({ where: { follower, following }});
    if (!foundFollowing) {
      throw new Error('Unable to unfollow as not following currently');
    }
    await foundFollowing.destroy();
    return findUserById(following);
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  getUserByEmailAndPassword,
  updateUser,
  deleteUser,
  verifyUser,
  followUser,
  unfollowUser
};