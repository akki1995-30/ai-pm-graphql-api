import { gql } from "apollo-server";

export const projectTypeDefs = gql`

type Project {
  _id: ID!
  name: String!
  team: ID!
  createdAt: String
}

input CreateProjectInput {
  name: String!
  teamId: ID!
}

extend type Query {
  projects(teamId: ID!): [Project]
  project(id: ID!): Project
}

extend type Mutation {
  createProject(input: CreateProjectInput!): Project
}

`;