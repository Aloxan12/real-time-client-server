import axios from "axios";
import {v1} from "uuid";
import {useEffect} from "react";

export const Registration =()=>{

    // useEffect(()=>{
    //     axios.post('http://localhost:9000/api/registration',{
    //         username: 'Виктуся',
    //         password: '12344'
    //     }).then(res => console.log(res)).catch()
    // },[])

    return(
        <div>
            <form>
                <div>
                    <label>Введите имя</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Введите пароль</label>
                    <input type="password" />
                </div>
                <div>
                    <label>Введите еще раз пароль</label>
                    <input type="password" />
                </div>
            </form>
        </div>
    )
}