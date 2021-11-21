import React from "react";
import { useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../Constants/urls";

const Home = () =>{

    useEffect(() => {
        axios
        .get(`${BASE_URL}/pokemon?limit=30&offset=200`)
        .then((res) =>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    return(
        <div>
            home
        </div>
    )
}

export default Home;