const { gql } = require('apollo-server-express');

const recipeTypeDefs = gql`

  type Query {
    getRecipes: [Recipe]
    getRecipe(id: ID!): Recipe
  }

  type Mutation {
    createRecipe(input: CreateRecipeInput!): Recipe
  }

  type Recipe {
    id: ID
    image: String!
    title: String!
    description: String!
    duration: Int!
    ingredients: String!
    instructions: String!
    category: Category!
    user: User!
  }

  input CreateRecipeInput {
    image: String!
    title: String!
    description: String!
    duration: Int!
    ingredients: String!
    instructions: String!
    category: ID!
    user: ID!
  }
`;

module.exports = recipeTypeDefs;