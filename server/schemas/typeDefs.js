const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Book {
    _id: ID!
    bookId: String
    authors: [String]
    # authors: String
    description: String
    title: String
    image: String
    link: String
  }

type User {

  }

input savedBook {

  }

type Query {
    me: User  
  }

type Mutation {

  }
`;



module.exports = typeDefs;