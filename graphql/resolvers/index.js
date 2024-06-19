const { userQueries, userMutations } = require("./user");

const resolvers = {
    Query: {
        ...userQueries
    },
    Mutation: {
        ...userMutations
    }
};

module.exports = resolvers;