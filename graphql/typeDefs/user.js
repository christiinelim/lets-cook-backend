const { gql } = require('apollo-server-express');

const userTypeDefs = gql`
  type Query {
    getUsers: [User]
    getUser(id: ID!): User
    login(input: LoginInput!): User
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    verifyUser(input: VerifyUserInput!): User
    updatePassword(input: UpdateUserInput!): User
    deleteUser(id: ID!): User
    followUser(input: FollowInput!): User
    unfollowUser(input: FollowInput!): User
  }

  type User {
    id: ID
    username: String!
    email: String!
    password: String!
    image: String
    first_name: String!
    last_name: String!
    contact: String!
    address: String!
    verified: String
    followers: [User]
    following: [User]
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

  input UpdateUserInput {
    email: String
    password: String
  }

  input VerifyUserInput {
    id: ID
    token: Int
    type: String
  }

  input FollowInput {
    follower: ID
    following: ID
  }
`;

module.exports = userTypeDefs;