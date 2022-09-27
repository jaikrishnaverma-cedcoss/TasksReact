import React, { useState } from 'react'

function Task1() {
 const [cnt,setCnt]=useState(0)
 const incer=()=>{
    setCnt(prev=>prev+1)
 }
    return (
   <>
    <div className="row m1 p1 flexJCC flexAIC">
    <button onClick={incer}  className="btn btn-success">
      {cnt}
    </button>
   </div>
   </>

  )
}

export default Task1