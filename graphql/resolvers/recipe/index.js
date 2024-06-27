// const recipeMutations = require('./mutations');
// const recipeQueries = require('./queries');

// module.exports = {
//   recipeMutations,
//   recipeQueries,
// };

const recipeMutations = require('./mutations');
const recipeQueries = require('./queries');
const User = require('../../../models/User');
const Category = require('../../../models/Category');

const recipeFieldResolvers = {
  category: async (root) => {
    return await Category.findByPk(root.categoryId);
  },
  user: async (root) => {
    return await User.findByPk(root.userId);
  }
};

module.exports = {
  recipeQueries,
  recipeMutations,
  recipeFieldResolvers,
};
