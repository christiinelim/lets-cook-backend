const { findAllRecipes, findRecipeById } = require("../../../repository/Recipe");

const recipeQueries = {
    getRecipes: async () => {
        return await findAllRecipes();
    },
    getRecipe: async (_root, { id }) => {
        return await findRecipeById(id);
    }
};

module.exports = recipeQueries;