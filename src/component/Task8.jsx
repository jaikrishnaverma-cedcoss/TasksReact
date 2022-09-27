import React, { useCallback } from 'react'
import { useState } from 'react';
const Task8 = () => {
    const [cnt, setCnt] = useState(0)
    const [state,setState] = useState({ isActive: false });
    const Incrementor = (e) => {
      setCnt(parseInt(e.target.value))
    }
    const handleToggle = useCallback(() => {
        setState({ isActive: !state.isActive });
      }, [state.isActive]);
    // const handleToggle = () => {
    //    setState({ isActive: !state.isActive });
    //   };
  return (
    <div className='col'>
        <h3>Task 7B</h3>
<div className="main row flexJCC ">
        <div className={`col flexAIC flexJCC theme${state.isActive}`} style={{ width: "500px" }}>
         <input type="number" value={cnt} onChange={Incrementor}/>

         <button className="btn btn-info " onClick={handleToggle} style={{fontSize: "20px" }}>Toggle theme</button>
         <button className="btn">{cnt}</button>
         <button className="btn">{cnt+1}</button>
         <button className="btn">{cnt+2}</button>
        </div>
      </div>
    </div>
  )
}

export default Task8