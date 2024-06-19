const { gql } = require('apollo-server-express');

const userTypeDefs = gql`
  type Query {
    getUsers: [User]
    getUser(id: ID!): User
    login(input: LoginInput!): User
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
  }

  type User {
    id: ID
    username: String
    email: String
    password: String
    image: String
    first_name: String
    last_name: String
    contact: String
    address: String
    verified: String
  }

  input CreateUserInput {
    username: String
    email: String
    password: String
    first_name: String
    last_name: String
    contact: String
    address: String
  }

  input LoginInput {
    email: String
    password: String
  }
`;

module.exports = userTypeDefs;