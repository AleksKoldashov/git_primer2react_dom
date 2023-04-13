import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export function PostPage (){
    const {id} = useParams()
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(response => response.json())
          .then(json => setPosts(json))
    },[])

    var q = posts.userId
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${posts.userId}`)
          .then(response => response.json())
          .then(json => setUsers(json))
    },[posts])
    
    console.log('Users', q);
    return(
        <div>
             <div><span>{posts.id}.{posts.body}</span></div>
            <h1>Пользователь: {users.name}</h1>
        </div>
       
    )
}