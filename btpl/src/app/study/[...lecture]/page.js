'use client'
import React from 'react'

function LectureData({params}) {
    console.log(params);
  return (
    <>
    <div>Day{params.lecture[0]} </div>
    <div>Lecture NO{params.lecture[1]} </div>
    <div>teacher {params.lecture[2]} </div>
    </>
  )
}

export default LectureData