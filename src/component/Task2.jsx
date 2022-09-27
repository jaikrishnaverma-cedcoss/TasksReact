import React, { useState } from 'react'

function Task2() {
 const [cnt,setCnt]=useState(0)

    return (
   <>
   <div className="col flexAIC">
    <div className="row m1 p1 flexJCC flexAIC">
        <button className="btn btn-info"  onClick={()=>setCnt(prev=>prev-1)}>-</button>
    <button  className="btn btn-success">
      {cnt}
    </button>
        <button className="btn btn-info"  onClick={()=>setCnt(prev=>prev+1)}>
            +
        </button>
   </div>
   <button className="btn btn-danger" style={{maxWidth:"80px"}} onClick={()=>setCnt(0)}>RESET</button>
   </div>
   </>

  )
}

export default Task2