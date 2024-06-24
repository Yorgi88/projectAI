import React from 'react'
import { useState, useEffect } from 'react'

const Testin = () => {
    const [data, setData] = useState(null)
    // using the setData to manipulate the data

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const resp = await fetch("http://localhost:5000/home")
            const respData = await resp.json();
            setData(respData)
            
        } catch (error) {
            console.error("Something went wrong", error)
        }
    }
  return (
    <>
         <div>Testin the data fetched from the backend</div>
         {data ? (<pre>{JSON.stringify(data, null, 2)}</pre>) : (<p>Loading...</p>)}
    </>
   

  )
}

export default Testin