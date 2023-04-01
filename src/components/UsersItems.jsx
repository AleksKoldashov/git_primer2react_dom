import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export function UsersItems ({user, index}){
  
   return (
    <div>
      <Link to={`${user.id}`}>
      <span>{index}. {user.name}</span>
      <h3>{user.username}</h3>
      <hr/>
      </Link>
    </div>
   )
   

}