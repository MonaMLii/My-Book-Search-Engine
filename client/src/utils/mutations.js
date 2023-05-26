import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
    _id
    username
    email
    bookCount
    savedBooks {
        bookId
        authors
        description
        link
        title
        image
      }
    }
  }
`;


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation savedBooks($authors: [String], $description: String!, $title: String!, $bookId: ID!, $image: String, $link: String) {
    savedBooks(authors: $authors, description: $description, title: $title, bookId: $bookId, image: $image, link: $link) {
      bookId
      authors
      description
      link
      title
      image
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      bookId
      authors
      description
      link
      title
      image
    }
  }
`;
