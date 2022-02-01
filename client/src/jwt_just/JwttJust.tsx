import React, {useState} from 'react'
import './JwttJust.css'
import axios from "axios";

export const Registration = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('e',e)
        console.log(name, password, password2)
        if(name !== ''){
            await axios.post('http://localhost:9000/api/registration',{
                username: name,
                password: password
            }).then(res => console.log(res)).catch()
        }
    };

    return (
        <div className="auth_wrap">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Введите имя</label>
                    <input type="text" value={name} onChange={(e) => setName(e.currentTarget.value)} name="name"/>
                </div>
                <div>
                    <label htmlFor="password">Введите пароль</label>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.currentTarget.value)} name="password"/>
                </div>
                <div>
                    <label htmlFor="password2">Введите еще раз пароль</label>
                    <input type="password" name="password2" value={password2} onChange={(e)=> setPassword2(e.currentTarget.value)}/>
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        </div>
    )
}