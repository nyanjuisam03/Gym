import React from "react";
import { useState,useEffect } from "react";
import { fetchData,exerciseOption } from "../component";
import {Link} from "react-router-dom"



export function LegWorkout(){
    const[legExercise,setlegExercise]=useState([])

    const getLegworkout=async()=>{
        const legData=await fetchData('https://api.api-ninjas.com/v1/exercises?muscle=calves',exerciseOption)
        setlegExercise(legData)
        console.log(legData)
    }



    useEffect(()=>{
        getLegworkout()
    })
    return(
        <>
        <h2>legworkout</h2>
        <div className="bodyStyles">
        {legExercise.map((exercise)=>(
            <div className="cardStyles">
               <h2> {exercise.name}</h2>
               <p>{exercise.difficulty}</p>
               <p>{exercise.instructions}</p> 
            </div>
        ))}
        </div>
        </>
    )
}