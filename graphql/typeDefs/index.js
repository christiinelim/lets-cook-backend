const { gql } = require('apollo-server-express');
const userTypeDefs = require('./user');
const categoryTypeDefs = require('./category');
const recipeTypeDefs = require('./recipe');

const rootTypeDefs = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

module.exports = [rootTypeDefs, userTypeDefs, categoryTypeDefs, recipeTypeDefs];