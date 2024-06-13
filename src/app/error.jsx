'use client'
import React, { useEffect } from 'react'

function Error({ error, reset }) {
    useEffect(() => {
        console.log(error)
    }, [error])

  return (
    <>
        <div>Error</div>
        <button onClick={() => reset()}>Try again</button>
    </>
  
)}

export default Error