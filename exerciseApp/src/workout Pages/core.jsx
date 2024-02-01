import React from "react";
import { useState,useEffect } from "react";
import { fetchData,exerciseOption } from "../component";
import {Link} from "react-router-dom"


export function CoreWorkout(){

    const[coreExercise,setcoreExercise]=useState([])

    const getCoreworkout=async()=>{
        const coreData=await fetchData('https://api.api-ninjas.com/v1/exercises?muscle=abdominals',exerciseOption)
        setcoreExercise(coreData)
        console.log(coreData)
    }



    useEffect(()=>{
        getCoreworkout()
    })
    return(
        <>
        <h2>Coreworkout</h2>
        <div className="bodyStyles">
        {coreExercise.map((exercise)=>(
            <div  className="cardStyles">
             <h2> {exercise.name}</h2>  
             <p>{exercise.difficulty}</p>
             <p>{exercise.instructions}</p> 
            </div>
        ))}
        </div>
        </>
    )
}