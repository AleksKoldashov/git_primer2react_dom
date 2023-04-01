import React, { useEffect, useState } from "react";
import { UsersItems } from "./UsersItems";
import { Link, useLoaderData } from "react-router-dom";


export function Users (){
   const [users, setUsers] = useState([])

   
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
      .then(response => response.json())
      .then(json => setUsers(json))
},[])


 console.log(users);
   
   return<div>
  
   
   {
 users.map((user, index)=>
 <UsersItems user={user} index={index+1} key={user.id}/>)
   }
  
   
   
    
    </div>
}