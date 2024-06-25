const { createUser, updateUser, deleteUser, verifyUser, followUser, unfollowUser } = require("../../../repository/User");
const { createToken, verifyToken } = require("../../../repository/Token");
const { sendTokenEmail } = require("../../../services/emailService");

const userMutations = {
    createUser: async (_root, { input }) => {
        const newUser = await createUser(input);
        const verificationToken = await sendTokenEmail(input.email);
        await createToken(newUser.toJSON().id, verificationToken);
        return newUser
    },
    verifyUser: async (_root, { input }) => {
        const verified = await verifyToken(input);
        if (verified) {
            return await verifyUser(input.id);
        } else {
            throw new Error("Invalid token")
        }
    },
    updatePassword: async (_root, { input }) => {
        return await updateUser(input);
    },
    deleteUser: async (_root, { id }) => {
        return await deleteUser(id)
    },
    followUser: async (_root, { input }) => {
        return await followUser(input)
    },
    unfollowUser: async (_root, { input }) => {
        return await unfollowUser(input)
    }
};
  
module.exports = userMutations;