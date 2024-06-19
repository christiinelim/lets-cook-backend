const { gql } = require('apollo-server-express');
const userTypeDefs = require('./user');

const rootTypeDefs = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

module.exports = [rootTypeDefs, userTypeDefs];