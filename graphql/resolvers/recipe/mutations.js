const { createRecipe } = require("../../../repository/Recipe");

const recipeMutations = {
    createRecipe: async (_root, { input }) => {
        return await createRecipe(input);
    },
    // verifyUser: async (_root, { input }) => {
    //     const verified = await verifyToken(input);
    //     if (verified) {
    //         return await verifyUser(input.id);
    //     } else {
    //         throw new Error("Invalid token")
    //     }
    // },
    // updatePassword: async (_root, { input }) => {
    //     return await updateUser(input);
    // },
    // deleteUser: async (_root, { id }) => {
    //     return await deleteUser(id)
    // },
    // followUser: async (_root, { input }) => {
    //     return await followUser(input)
    // },
    // unfollowUser: async (_root, { input }) => {
    //     return await unfollowUser(input)
    // }
};
  
module.exports = recipeMutations;