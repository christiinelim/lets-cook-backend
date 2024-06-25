const { userQueries, userMutations } = require("./user");
const { categoryQueries } = require("./category");

const resolvers = {
    Query: {
        ...userQueries,
        ...categoryQueries
    },
    Mutation: {
        ...userMutations
    }
};

module.exports = resolvers;