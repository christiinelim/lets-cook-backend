const { gql } = require('apollo-server-express');

const categoryTypeDefs = gql`
  type Query {
    getCategories: [Category]
    getCategory(id: ID!): Category
  }

  type Category {
    id: ID!
    category: String!
  }
`;

module.exports = categoryTypeDefs;