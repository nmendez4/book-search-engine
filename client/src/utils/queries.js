// queries.js file

import { gql } from '@apollo/client'

export const GET_ME = gql`
{
    me {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            bookId
            image
            link
            title
        }
    }
}
`;