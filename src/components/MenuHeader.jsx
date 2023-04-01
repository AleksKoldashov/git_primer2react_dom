import React, { useId } from "react";
import { Layout, Menu, theme } from 'antd';
import { NavLink } from "react-router-dom";

export function MenuHeader (){

    const items = 
    [
        {title:'Главная', id: useId(),path:"home" },
        {title: 'Пользователи', id: useId(), path:"user" },
        {title: 'Посты', id: useId(), path:"posts" }
    ]
    
   
    const items1 = items.map(({title, id, path}) => ({
        key:`${id}`,
        label: <NavLink  to={path}>{title}</NavLink>,
        
      }));
      console.log(items1)
    return(
        <Menu 
        theme="dark" 
        mode="horizontal" 
        defaultSelectedKeys={['Главная']} 
        items={items1} 
        />
    )
}