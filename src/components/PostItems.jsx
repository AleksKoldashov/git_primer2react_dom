import React from "react";
import { Link } from "react-router-dom";

export function PostItems ({post, index}){


   return (
    <div>
      <Link to={`${post.id}`}>
      {
    <div><span>{post.id}.{post.title}</span>
    </div>}
    <hr/>
      </Link>
     
    </div>
   )
   

}