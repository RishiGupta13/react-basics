import {useState} from 'react'

export const Form=()=>{
    const [username,setUsername]=useState('')

    const submitHandler=(event)=>{
        event.preventDefault()
        alert(`Form data is ${username}`)
    }

    return <form onSubmit={submitHandler}>
        <div>
            <label>Username</label>
            <input type='text' value={username}
            onChange={(event)=>{
                setUsername(event.target.value)
           }}></input>
            <button type='submit' >Submit</button>

        </div>
    </form>


}