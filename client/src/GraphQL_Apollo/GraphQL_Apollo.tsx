import React, {useEffect, useState, MouseEvent} from "react";
import {useMutation, useQuery} from "@apollo/client";
import {GET_ALL_USERS, GET_ONE_USER} from "./query/user";
import {CREATE_USER} from "./mutation/user";
import {log} from "util";

type PostType = {
    id:number
    title:string
    content: string
}

type UserType = {
    id:number
    username: string
    age:number
    posts: PostType
}

export const GraphQLApollo =()=>{
    const {data, loading, error, refetch} = useQuery(GET_ALL_USERS)
    // const {data: oneUser, loading:loadingOneUser} = useQuery(GET_ONE_USER, {
    //     variables: {
    //         id: 1
    //     }
    // })
    const [newUser] = useMutation(CREATE_USER)
    const [users, setUsers] = useState<UserType[]>([])
    const [username, setUsername] = useState<string>('')
    const [age, setAge] = useState<number>(0)


    useEffect(() => {
        if (!loading) {
            setUsers(data.getAllUsers)
        }
    }, [data])

    const addUser = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        newUser({
            variables: {
                input: {
                    username, age
                }
            }
        }).then(({data}) => {
            console.log(data)
            setUsername('')
            setAge(0)
        }).catch(e=>console.log(e))
    }
    const getAll = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        refetch()
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <form action="">
                <input value={username} onChange={(e)=>setUsername(e.currentTarget.value)} type="text"/>
                <input value={age} onChange={(e)=>setAge(+e.currentTarget.value)} type="number"/>
                <div className={'btns'}>
                    <button onClick={(e)=>addUser(e)}>Создать</button>
                    <button onClick={(e)=>getAll(e)}>Получить</button>
                </div>
            </form>
            <div>
                {users.map(user=>
                    <div key={user.id}>{user.id}, {user.username}, {user.age}</div>
                )}
            </div>
        </div>
    )
}














