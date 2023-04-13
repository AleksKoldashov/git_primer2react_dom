import axios from "axios";

export const getPosts = () => axios
    .get(`https://jsonplaceholder.typicode.com/posts?_limit=100`)
    .then((x) => x.data);
   
