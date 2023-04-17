import {useState} from 'react'

export const Message=()=>{
    const [message, setMessage]=useState('Hello There');

    const changeState=()=>{
        setMessage("Thanks for clicking bunty");
    }

    return (
    <div>
        <h1>{message}</h1>
        <button onClick={changeState}>
            Click Here
            </button>
    </div>

    )
}

