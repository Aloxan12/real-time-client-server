import React, {useEffect, useState, MouseEvent} from "react";
import {useMutation, useQuery} from "@apollo/client";
import {GET_ALL_USERS} from "./query/user";
import {CREATE_USER} from "./mutation/user";

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

const GraphQLApollo =()=>{
    const {data, loading, error} = useQuery(GET_ALL_USERS)
    const [newUser] = useMutation(CREATE_USER)
    const [users, setUsers] = useState<UserType[]>([])
    const [username, setUsername] = useState('')
    const [age, setAge] = useState(0)

    useEffect(()=>{
        if(!loading){
            setUsers(data.getAllUsers)
        }
    },[])
    if(loading){
        return <h1>Loading...</h1>
    }
    const addUser =(e:MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        newUser({
            variables: {
                input: {
                    username, age
                }
            }
        }).then(({data})=>{
            console.log(data)
            setUsername('')
            setAge(0)
        })
    }
    return (
        <div>
            <form action="">
                <input value={username} onChange={(e)=>setUsername(e.currentTarget.value)} type="text"/>
                <input value={age} onChange={(e)=>setAge(+e.currentTarget.value)} type="number"/>
                <div className={'btns'}>
                    <button onClick={()=>addUser}>Создать</button>
                    <button>Получить</button>
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














