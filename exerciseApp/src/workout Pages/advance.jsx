import React from "react";
import { useState,useEffect } from "react";
import { fetchData,exerciseOption } from "../component";
import {Link} from "react-router-dom"

export function Advance(){

    const [advanceWorkout,setAdvanceworkout]=useState([])

    useEffect(()=>{
        AdvanceWorkoutSearched()
    },[])
    
    let AdvanceWorkoutSearched=async()=>{
    const advanceData= await fetchData('https://api.api-ninjas.com/v1/exercises?difficulty=expert',exerciseOption)
    setAdvanceworkout(advanceData)
    console.log(advanceData)
        }


    return (
        <>
    <h2>Advance Workout</h2>
    <div className="bodyStyles">
    {advanceWorkout.map((exercise)=>(
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