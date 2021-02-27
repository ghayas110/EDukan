/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      phone_number
      category
      resellers {
        id
        username
        email
        phone_number
        category
        resellers {
          id
          username
          email
          phone_number
          category
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        phone_number
        category
        resellers {
          id
          username
          email
          phone_number
          category
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      userId {
        id
        username
        email
        phone_number
        category
        resellers {
          id
          username
          email
          phone_number
          category
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      title
      description
      price
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId {
          id
          username
          email
          phone_number
          category
          createdAt
          updatedAt
        }
        title
        description
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
