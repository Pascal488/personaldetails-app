import {gql } from "@apollo/client"

export const REGISTER = gql `
mutation RegisterUser($registerInput: RegisterInput!) {
  registerUser(registerInput: $registerInput) {
    email
    password
    token
    username
  }
}
`

export const LOGIN = gql`
mutation LoginUser($loginInput: LoginInput!) {
  loginUser(loginInput: $loginInput) {
    email
    password
    token
  }
}

`