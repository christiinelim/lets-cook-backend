const { userQueries, userMutations } = require("./user");
const { categoryQueries } = require("./category");
const { recipeQueries, recipeMutations, recipeFieldResolvers } = require('./recipe');

const resolvers = {
    Query: {
        ...userQueries,
        ...categoryQueries,
        ...recipeQueries
    },
    Mutation: {
        ...userMutations,
        ...recipeMutations
    },
    Recipe: {
        ...recipeFieldResolvers,
    }
};

module.exports = resolvers;