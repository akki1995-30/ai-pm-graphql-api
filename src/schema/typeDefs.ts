import { gql } from "apollo-server";

export const typeDefs = gql`

# ---------- ENUMS ----------

# Matches Task model status enum (lowercase values in MongoDB)
enum TaskStatus {
  todo
  in_progress
  done
}

# ---------- TYPES ----------

# Matches User model (includes avatar, status, role)
type User {
  _id: ID
  id: ID
  name: String
  email: String
  role: String
  avatar: String
  status: String
  createdAt: String
}

# Shape returned by register/login: { token, user: { id, name, email } }
type AuthPayloadUser {
  id: ID
  name: String
  email: String
}

type AuthResponse {
  token: String
  user: AuthPayloadUser
}

# Matches Team model: name + owner (populated User ref)
type Team {
  _id: ID
  name: String
  description: String
  owner: User
  createdAt: String
}

# Team member with role
type TeamMember {
  _id: ID
  user: User
  role: String
}

# Matches Project model: name + team (ObjectId, not populated)
type Project {
  _id: ID
  name: String
  description: String
  team: ID
  createdAt: String
}

# Matches Task model: assignedTo is populated with name+email, project is ObjectId
type Task {
  _id: ID
  title: String
  description: String
  status: TaskStatus
  assignedTo: User
  project: ID
  createdAt: String
}

# ---------- INPUT TYPES ----------

input RegisterInput {
  name: String!
  email: String!
  password: String!
}

input LoginInput {
  email: String!
  password: String!
}

input CreateTeamInput {
  name: String!
  description: String
}

input CreateProjectInput {
  name: String!
  description: String
  teamId: ID!
}

input CreateTaskInput {
  title: String!
  description: String
  projectId: ID!
  assignedTo: ID
}

input UpdateTaskInput {
  title: String
  description: String
  status: TaskStatus
  assignedTo: ID
}

# ---------- QUERIES ----------

type Query {

  # GET /admin/users  (ADMIN only)
  users: [User]

  # GET /auth/me
  me: User

  # GET /teams
  teams: [Team]

  # GET /projects/:teamId
  projects(teamId: ID!): [Project]

  # GET /projects/one/:projectId
  project(projectId: ID!): Project

  # GET /teams/:teamId/members
  teamMembers(teamId: ID!): [TeamMember]

  # GET /tasks/:projectId
  tasks(projectId: ID!): [Task]

}

# ---------- MUTATIONS ----------

type Mutation {

  # PATCH /admin/users/:userId/role  (ADMIN only)
  assignRole(userId: ID!, role: String!): User

  # PATCH /admin/users/:userId/status  (ADMIN only)
  setUserStatus(userId: ID!, status: String!): User

  # POST /auth/register  →  { token, user: { id, name, email } }
  register(input: RegisterInput!): AuthResponse

  # POST /auth/login     →  { token, user: { id, name, email } }
  login(input: LoginInput!): AuthResponse

  # POST /teams          →  Team
  createTeam(input: CreateTeamInput!): Team

  # POST /teams/:teamId/members  →  TeamMember
  addTeamMember(teamId: ID!, userId: ID!, role: String!): TeamMember

  # DELETE /teams/:teamId/members/:userId
  removeTeamMember(teamId: ID!, userId: ID!): Boolean

  # POST /projects       →  Project
  createProject(input: CreateProjectInput!): Project

  # POST /tasks          →  Task
  createTask(input: CreateTaskInput!): Task

  # PATCH /tasks/:taskId →  Task
  updateTask(taskId: ID!, input: UpdateTaskInput!): Task

  # DELETE /tasks/:taskId
  deleteTask(taskId: ID!): Boolean

}

`;