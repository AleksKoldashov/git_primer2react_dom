import React, { useEffect, useState } from "react";


export function Post (){
    const [posts, setPosts] = useState([])
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
          .then(response => response.json())
          .then(json => setPosts(json))
    },[])


    return(
        <div>
            <input></input>

            {
                posts.map((p, index)=>
                <div key={p.id}>
                    <span style={{color:'blue'} }>{index+1}.{p.title}</span>
                    <h1 style={{color:'green'}}>{p.body}</h1>
                </div>)
            }
        </div>
    )
}