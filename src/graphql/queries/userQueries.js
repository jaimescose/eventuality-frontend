import gql from 'graphql-tag'

export const userBasicInfoFragment = gql`
  fragment UserBasicInfo on User {
    username
    email
    createdOn
    isActive
    emailVerified
    firstName
    lastName
  }
`

export const GET_USERS_QUERY = gql`
  query getUsers {
    users {
      id
      username
      email
      createdOn
      isActive
      emailVerified
      firstName
      lastName
    }
  }
`

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $username: String!,
    $email: String!,
    $password: String!
  ) {
      createUser(
        username: $username,
        email: $email,
        password: $password
      ) {
        success
        exceptions {
          field
          message
        }
        user {
          id
          username
          email
          createdOn
          isActive
          emailVerified
          firstName
          lastName
        }
      }
  }
`