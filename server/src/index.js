const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const AuthPayload = require("./resolvers/AuthPayload");
const Subscription = require("./resolvers/Subscription");

// const { Client } = require("pg");
// const client = new Client();

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query,
  Mutation,
  AuthPayload,
  Subscription
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: "src/generated/prisma.graphql",
      endpoint: "https://us1.prisma.sh/george-zhang/database/dev",
      secret: "mysecret123",
      debug: true
    })
  })
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
