import {gql } from "@apollo/client"

export const ME = gql`
       query Me {
              me {
                     email
                     password
                     token
                     username
              }
       }


`

export const GETUSERBYEMAIL = gql`
       query GetUserByEmail($email: String!) {
              getUserByEmail(email: $email) {
                     email
                     password
                     token
                     username
  }
}      



`