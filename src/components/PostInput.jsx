import React, {  useState } from "react";


export function Post() {
  const [post, setPosts] = useState();

  const search = (inp) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${inp}`)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  };

  const [inp, setInp] = useState("");
  
  return (
    <div>
      <input onChange={(e) => setInp(e.target.value)}></input>
      <button onClick={() => search(inp)}>dfdf</button>
      {post && <div>{post.title}</div>}
    </div>
  );
}
