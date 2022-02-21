//  mutations.js file

import gql from "graphql-tag";

export const LOGIN_USER = gql`
mutation login ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
        _id
        username
        }
    } 
}
`;

