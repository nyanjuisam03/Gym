import React from "react";
import { useState,useEffect } from "react";
import { fetchData,exerciseOption } from "../component";
import {Link} from "react-router-dom"


export function ArmWorkout(){

    const[armExercise,setarmExercise]=useState([])

    const getArmworkout=async()=>{
        const armData=await fetchData('https://api.api-ninjas.com/v1/exercises?muscle=forearms',exerciseOption)
        setarmExercise(armData)
        console.log(armData)
    }



    useEffect(()=>{
        getArmworkout()
    })
    return(
        <>
        <h2>Armworkout</h2>
        <div className="bodyStyles">
        {armExercise.map((exercise)=>(
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