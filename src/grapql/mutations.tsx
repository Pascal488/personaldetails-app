import {gql } from "@apollo/client"

export const REGISTER = gql `
mutation Register($user: UserInput!) {
  register(user: $user) {
    email
    id
    name
    username
  }
}
`