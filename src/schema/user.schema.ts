import { gql } from "apollo-server";

export const userTypeDefs = gql`

type User {
  _id: ID
  name: String
  email: String
  password: String
}

type AuthResponse {
  token: String
  user: User
}

input RegisterInput {
  name: String!
  email: String!
  password: String!
}

input LoginInput {
  email: String!
  password: String!
}

extend type Query {
  me: User
}

extend type Mutation {

  register(input: RegisterInput!): AuthResponse

  login(input: LoginInput!): AuthResponse

}
`;