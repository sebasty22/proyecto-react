import React, {useState,useEffect} from "react";


export const fetch =(productos)=>{
    return new Promise ((res,rej)=>{

        setTimeout(()=>{
            res(productos)
        },2000)
        

    })
}