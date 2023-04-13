import React from "react";

export function MyBtn ({props, children}){
    return(
        <button {...props}>{children}</button>
    )
}