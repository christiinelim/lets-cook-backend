const { createUser } = require("../../../repository/user");

const userMutations = {
    createUser: async (_root, { input }) => {
        return await createUser(input);
    },
};
  
module.exports = userMutations;