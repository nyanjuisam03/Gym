import React from "react";
import { useState,useEffect } from "react";
import { fetchData,exerciseOption } from "../component";
import {Link} from "react-router-dom"



export function Chest(){
    const [searchchest,setChest]=useState([])

useEffect(()=>{
    chestSearched()
},[])

let chestSearched=async()=>{
const chestData= await fetchData('https://api.api-ninjas.com/v1/exercises?muscle=chest',exerciseOption)
setChest(chestData)
console.log(chestData)
    }



    return (
        <>
        <h2>Chest Workout</h2>
        <div className="bodyStyles">
      {searchchest.map(exercise=>(
        <div className="cardStyles">
       <h3>{exercise.name}</h3>
       <p>{exercise.difficulty}</p>
    <p>{exercise.instructions}</p>  
       </div>
      ))}
       </div>
        </>
    )
}