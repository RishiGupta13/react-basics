import { useState,useEffect } from "react"

export const PostForm=()=>{
    const [userId,setuserID]=useState('');
    const [title,setTitle]=useState('');
    const [body,setbody]=useState('');

    return <form onSubmit={(e)=>{
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: title,
    body: body,
    userId: userId,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

    }}> 
        <div>
            <input type='text' placeholder="UserID" value={userId}
             onChange={(e)=>{
                setuserID(e.target.value)
            }}></input>
        </div>
        <div>
            <input type='text' placeholder="Title" value={title}
            onChange={(e)=>{
                setTitle(e.target.value)
            }}></input>
        </div>
        <div>
            <input type='text' placeholder="Body" value={body}
            onChange={(e)=>{
                setbody(e.target.value)
            }}></input>
        </div>

        <button type="submit">Submit</button>
    </form>



} 