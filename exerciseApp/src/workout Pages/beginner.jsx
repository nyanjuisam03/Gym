import React from "react";
import { useState,useEffect } from "react";
import { fetchData,exerciseOption } from "../component";
import {Link} from "react-router-dom"

export function Beginner(){
    const [beginnerWorkout,setBeginnerworkout]=useState([])

    useEffect(()=>{
        BeginnerWorkoutSearched()
    },[])
    
    let BeginnerWorkoutSearched=async()=>{
    const beginData= await fetchData('https://api.api-ninjas.com/v1/exercises?difficulty=beginner',exerciseOption)
    setBeginnerworkout(beginData)
    console.log(beginData)
        }


    return (
        <>
    <h2>Beginner</h2>
    <div className="bodyStyles">
  {beginnerWorkout.map((exercise)=>(
    <div className="cardStyles">
        <h2>{exercise.name}</h2>
        <p>{exercise.muscle}</p>
        <p>{exercise.instructions}</p> 
    </div>
  ))}
  </div>
        </>
    )
}