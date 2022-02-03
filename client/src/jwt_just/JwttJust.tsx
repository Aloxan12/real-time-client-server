import React, {useState} from 'react'
import './JwttJust.css'
import axios from "axios";

export const Registration = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(name === ''){
            setError('Поле "имя" не заполнено!!')
        }else if(password.length < 4 && password2.length < 4){
            setError('Поле пароль должно быть заполнено и быть длинее 4 символов!!')
        }else if(password !== password2){
            setError('Разные пароли!!')
        }else {
            await axios.post('http://localhost:9000/api/registration',{
                username: name,
                password: password
            })
        }
    };

    return (
        <div className="auth_wrap">
            <div className="registration-block">
                <div className="header-block"><span>Регистрация</span></div>
                <form onSubmit={handleSubmit} className="form-block">
                    <div className="form-item">
                        <label htmlFor="name">Введите имя:</label>

                        <input type="text" value={name} placeholder="Введите свое имя" onChange={(e) => {
                            setError('')
                            setName(e.currentTarget.value)
                        }} name="name"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Введите пароль:</label>
                        <input type="password" value={password} placeholder="Введите пароль" onChange={(e)=>{
                            setError('')
                            setPassword(e.currentTarget.value)
                        }} name="password"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="password2">Введите еще раз пароль:</label>
                        <input type="password" name="password2" value={password2} placeholder="Введите ещё раз пароль" onChange={(e)=>{
                            setError('')
                            setPassword2(e.currentTarget.value)
                        }}/>
                    </div>
                    <div className="form-item btn-block">
                        <input type="submit" className="btn" value="Зарегестрироваться"/>
                        {error && <div className="error-text">{error}</div>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(name === ''){
            setError('Поле "имя" не заполнено!!')
        }else {
            await axios.post('http://localhost:9000/api/login',{
                username: name,
                password: password
            })
        }
    };

    return(
        <div>
            <div className="auth_wrap">
                <div className="registration-block">
                    <div className="header-block"><span>Добро пожаловать</span></div>
                    <form onSubmit={handleSubmit} className="form-block">
                        <div className="form-item">
                            <label htmlFor="name">Введите имя:</label>

                            <input type="text" value={name} placeholder="Введите свое имя" onChange={(e) => {
                                setError('')
                                setName(e.currentTarget.value)
                            }} name="name"/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="password">Введите пароль:</label>
                            <input type="password" value={password} placeholder="Введите пароль" onChange={(e)=>{
                                setError('')
                                setPassword(e.currentTarget.value)
                            }} name="password"/>
                        </div>
                        <div className="form-item btn-block">
                            <input type="submit" className="btn" value="Войти"/>
                            {error && <div className="error-text">{error}</div>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}