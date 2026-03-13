import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { context } from "./context/auth.context";

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

async function startServer() {

  await server.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, { context }) as any
  );

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`🚀 GraphQL running at http://localhost:${PORT}/graphql`);
  });

}

startServer();