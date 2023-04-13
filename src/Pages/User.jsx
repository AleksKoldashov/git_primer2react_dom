import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function User (){
    const [user, setUser] = useState([])
const params = useParams()

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
          .then(response => response.json())
          .then(json => setUser(json))
    },[])

    console.log('User',params);
   return<div >
 

<span>{user.id}.{user.name}</span>
  <div>{user.email}</div>
    </div>
}