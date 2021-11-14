import axios from "axios";
import React, {useEffect, useState} from "react";
import {v1} from "uuid";

type MessageType ={
    message: string
    id: string
}


export const LongPolling =()=>{
    const [messages, setMessages] = useState<MessageType[]>([])
    const [value, setValue] = useState('')

    useEffect(()=>{
        subscribe()
    },[])

    const subscribe = async ()=>{
        try {
            const {data} = await axios.get('http://localhost:5000/get-messages')
            setMessages(prev => [data, ...prev])
            await subscribe()
        }catch (e) {
            setTimeout(()=>{
                subscribe()
            }, 500)
        }
    }

    const sendMessage = async ()=>{
        axios.post('http://localhost:5000/new-messages', {
            message: value,
            id: v1()
        })
        setValue('')
    }

    return (
        <div className='main'>
            <div>
                <div className='form'>
                    <input value={value} type="text" onChange={e => setValue(e.currentTarget.value)}/>
                    <button onClick={sendMessage}>Отправиить</button>
                </div>
                <div className='messages'>
                    {messages.map((mess: MessageType) =>{
                        return(
                            <div className='message' key={mess.id}>
                                {mess.message}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
