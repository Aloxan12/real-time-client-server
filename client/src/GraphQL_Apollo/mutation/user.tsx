import {gql} from "@apollo/client";

export const CREATE_USER = gql`
     mutation crateUser($input: UserInput) {
        crateUser(input: $input){
            id, username, age
        }
     }
`