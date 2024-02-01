import React from "react";
import { useState,useEffect } from "react";
import { fetchData,exerciseOption } from "../component";
import {Link} from "react-router-dom"


export function Backworkout(){
    const [backExercise,setbackExercise]=useState([])



    const getBackworkout=async()=>{
        const backData=await fetchData('https://api.api-ninjas.com/v1/exercises?muscle=middle_back',exerciseOption)
        setbackExercise(backData)
        console.log(backData)
    }

useEffect(()=>{
    getBackworkout()
},[])

    return(
        <>
        <h1>Back Exercises</h1>
        <div className="bodyStyles">
       {backExercise.map((exercise)=>(
        <div  className="cardStyles">
        <h2>{exercise.name}</h2>
        <p>{exercise.difficulty}</p>
        <p>{exercise.instructions}</p> 
        </div>
       ))}
       </div>
        </>
    )
}