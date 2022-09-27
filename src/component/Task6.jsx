import React, { useMemo, useState } from 'react'
const Task6 = () => {
  const [cnt, setCnt] = useState(0)
  const [cnt1, setCnt1] = useState(0)
  const Incrementor1 = () => {
    setCnt(prev => prev + 1)
  }

  const Incrementor2 = () => {
    setCnt1(prev => prev + 1)
  }

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++
    return (cnt % 2 === 0) ? "Even" : "Odd"
  }, [cnt])

  // setCnt(useMemo(() => Incrementor1(), [cnt1]));
  // console.log()
  return (

    <div className="main row flexJCC">
      <div className="col flexAIC flexJCC" style={{ width: "500px" }}>
        <button className="btn btn-trans " style={{ color: "black", fontSize: "40px" }}>
          {cnt}
        </button>
        <div className="row"><button className="btn btn-info" onClick={Incrementor1}>Increment 1 : {cnt}</button>
          <button className="btn btn-info" onClick={Incrementor2}>Increment 2 : {cnt1}</button></div>
        <button className="btn btn-trans " style={{ color: "black", fontSize: "40px" }}>{isEven}</button>
      </div>
    </div>
  )
}

export default Task6