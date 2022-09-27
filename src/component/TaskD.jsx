import React from 'react'
import { useContext } from "react";
import { UserContext } from './Task4';
function TaskD() {
    const {user} = useContext(UserContext);
  return (
    <>
    <h1>Component 5</h1>
    <h2>{`Hello ${user} again through context api!`}</h2>
  </>
  )
}

export default TaskD