import React, {useState} from "react";

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
    const [users, setUsers] = useState<UserType[]>([])
    return (
        <div>
            <form action="">
                <input type="text"/>
                <input type="number"/>
                <div className={'btns'}>
                    <button>Создать</button>
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














