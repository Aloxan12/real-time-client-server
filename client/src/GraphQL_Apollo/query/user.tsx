import {gql} from "@apollo/client";

export const GET_ALL_USERS = gql`
    query {
        getAllUsers {
            id, username, age
        }
    }    
`

export const GET_ONE_USER = gql`
     query geyUser($id: ID){
        getUser(id: ID){
            id, username
        }
     }
`