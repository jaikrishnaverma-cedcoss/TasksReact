import React from 'react'
import { useContext } from 'react'
import { Result } from './Task5'
const Children1 = () => {
    const {output}=useContext(Result)
  return (
    <div>{output}</div>
  )
}

export default Children1