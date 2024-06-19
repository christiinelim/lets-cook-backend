require('dotenv').config();

const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const sequelize = require('./sequelize');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const app = express();
const PORT = process.env.PORT || 3000;

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req, sequelize })
  });

  await server.start();
  server.applyMiddleware({ app });

  app.get('/', (req, res) => {
    res.send('Hello, GraphQL!');
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
  });

  async function testConnection() {   
    try {     
      await sequelize.authenticate();
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  testConnection();
}

startApolloServer();