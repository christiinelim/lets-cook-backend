const { findAllUsers, findUserById, getUserByEmailAndPassword } = require("../../../repository/user");

const userQueries = {
    getUsers: async () => {
        return await findAllUsers();
    },
    getUser: async (_root, { id }) => {
        return await findUserById(id);
    },
    login: async (_root, { input }) => {
        return await getUserByEmailAndPassword(input);
    }
};

module.exports = userQueries;