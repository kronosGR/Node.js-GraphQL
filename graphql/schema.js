const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Post {
    _id: ID!
    title: String!
    content: String!
    imageUrl: String
    creator: User!
    createdAt: String!
    updatedAt: String!
  }
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String
    status: String!
    posts: [Post!]!
  }
  input UserData{
    email: String!
    name: String!
    password: String!
  }

  type AuthData{
    token: String!
    userId: String!
  }

  type PostData{
    posts: [Post!]!
    totalPosts: Int!
  }

  input PostInputData{
    title: String!
    content: String!
    imageUrl: String!
  }

  type RootQuery{
    login(email: String!, password: String!):AuthData!
    posts(page: Int): PostData!
  }

  type RootMutation {
    createUser(userInput: UserData): User!
    createPost(postInput : PostInputData): Post!
    post(id: ID!): Post!
  }

 schema{
   query: RootQuery
   mutation:RootMutation
 }
`);
