import React, { useState } from "react";
import { Post } from "./PostInput";
import { PostItems } from "./PostItems";
import { useMutation, useQuery } from "react-query";
import { getPosts } from "../api/api";
import { Space, Table, Tag } from 'antd';
import { ListConsumer } from "antd/es/list";
import { Link } from "react-router-dom";

const style = {color: 'red'}

export function Posts() {
 

const {data, status} = useQuery(['posts'],getPosts)
if(status !== "success") return <div style={style}>Loading....</div>




function del (pos){
  const newArr =  data.filter(p=>p.id !== pos.id)

  return newArr;
}

console.log(del());

 const shifled =  (arr) => {
    
  for(let i = arr.length - 1; i>0; i--){
    let tmp = arr[i]
    let rnd = Math.floor(Math.random()* (i+1))
    arr[i] = arr[rnd]
    arr[rnd]=tmp
  }
  return arr;
}
shifled(data)


const columns = [
  {
    title: 'Номер статьи',
    dataIndex: 'id',
    key: 'id',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'Статья',
    dataIndex: 'title',
    key: 'id',
  },
  {
    title: 'userId',
    dataIndex: 'userId',
    key: 'id',
  },
  {
    title: 'Описание',
    dataIndex: 'body',
    key: 'id',
  },
  
  {
    title: 'Action',
    key: 'action',
    render: (_, record,) => (
      <Space size="middle">
       <Link to={`/posts/${record.id}`}>Посмотреть</Link> 
        <button onClick={()=>del()} >Delete</button>
      </Space>
    ),
  },
];

  return (
    <div>
      <Post />
      {/* { data.map((post, index) => <PostItems post={post} index={index + 1} key={post.id} />)} */}
     <Table columns={columns} dataSource={del()} />;
    </div>
  );
}
