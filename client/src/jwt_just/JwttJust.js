import axios from "axios";
import {v1} from "uuid";
import {useEffect} from "react";

export const Registration =()=>{

    useEffect(()=>{
        axios.post('http://localhost:9000/api/registration',{
            username: 'Alex',
            password: '12344'
        }).then(res => console.log(res)).catch()
    },[])

    return(
        <div>

        </div>
    )
}