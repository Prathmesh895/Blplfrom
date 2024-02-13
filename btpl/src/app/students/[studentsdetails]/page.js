"use client"
import React from 'react'

function Students({params}) {

console.log(params);
  return (
    <div>
        <h1>Students Details</h1>
        <h2>Name :{params.studentsdetails}</h2>
    </div>
  )
}

export default Students