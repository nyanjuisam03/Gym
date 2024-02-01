import React from "react";
import { useState,useEffect } from "react";
import { fetchData,exerciseOption } from "../component";
import {Link} from "react-router-dom"


export function Fullworkout(){

    const [searchfullworkout,setFullworkout]=useState([])

    useEffect(()=>{
        fullWorkoutSearched()
    },[])
    
    let fullWorkoutSearched=async()=>{
    const fullData= await fetchData('https://api.api-ninjas.com/v1/exercises?type=cardio',exerciseOption)
    setFullworkout(fullData)
    console.log(fullData)
        }

    return(
        <>
        <h2>Fullworkout</h2>
        <div className="bodyStyles">
        {searchfullworkout.map((exercise)=>(
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