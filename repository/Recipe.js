const Recipe = require('../models/Recipe');

const findAllRecipes = async () => {
    try {
        return await Recipe.findAll({
            include: [user, category]
        });
    } catch (error) {
        throw new Error('Unable to fetch recipe');
    }
};

const findRecipeById = async (id) => {
    try {
        const recipe = await Recipe.findByPk(id, {
            include: [user, category]
        });
        if (!recipe) {
        throw new Error('Recipe not found');
        }
        return recipe;
    } catch (error) {
        throw new Error(error.message);
    }
};

const createRecipe = async (input) => {
    try {
        console.log(input)
        const recipe = await Recipe.create({ ...input });
        return recipe;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    findAllRecipes,
    findRecipeById,
    createRecipe
};