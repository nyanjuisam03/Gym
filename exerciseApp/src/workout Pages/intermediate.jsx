import React from "react";
import { useState,useEffect } from "react";
import { fetchData,exerciseOption } from "../component";
import {Link} from "react-router-dom"


export function Intermediate(){
    const [intermediateWorkout,setIntermediateworkout]=useState([])

    useEffect(()=>{
        IntermediateWorkoutSearched()
    },[])
    
    let IntermediateWorkoutSearched=async()=>{
    const intermediateData= await fetchData('https://api.api-ninjas.com/v1/exercises?difficulty=intermediate',exerciseOption)
    setIntermediateworkout(intermediateData)
    console.log(intermediateData)
        }




    return (
        <>
      <h2>Intermediate Workout</h2>
      <div className="bodyStyles">
      {intermediateWorkout.map((exercise)=>(
        <div  className="cardStyles">
            <h2>{exercise.name}</h2>
            <p>{exercise.muscle}</p>
            <p>{exercise.instructions}</p> 
        </div>
      ))}
      </div>
        </>
    )
}